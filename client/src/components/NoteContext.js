import React, {createContext, useReducer, useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import { fetchNotes } from '../api/index';
import { GET_NOTES, CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../constants/actionsTypes';

export const NoteContext = createContext(null);

const initialState = [];

const reducer = (notes, action) => {
  switch(action.type) {
    case GET_NOTES: {
      return action.payload;
    }
    case CREATE_NOTE: {
      return [...notes, action.payload];
    }
    case UPDATE_NOTE:{
      return notes.map(note => note._id === action.payload._id ?
        action.payload :
        note
      )
    }
    case DELETE_NOTE:{
      return notes.filter(note => note._id !== action.payload);
    }

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
}

export const NoteProvider = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [notes, dispatch] = useReducer(reducer, initialState);

  const [currentId, setCurrentId] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  
  const getNotes = (data) => {
    dispatch({
      type: GET_NOTES,
      payload: data.data,
    });
  };

  const createNote = (data) => {
    console.log(data)
    dispatch({
      type: CREATE_NOTE,
      payload: data
    });
  };

  const updateNote = (data) => {
    console.log(data)
    dispatch({
      type: UPDATE_NOTE,
      payload: data,
    });
  };

  const deleteNote = (id) => {
    dispatch({
      type: DELETE_NOTE,
      payload: id
    })
  }

  // if (user !== undefined) {
  //   fetchNotes(user.email)
  //     .then(data => {
  //       console.log(data)
  //       getNotes(data.data)
  //     })
  // }
useEffect(() => {
  fetchNotes()
  .then(data => {
    console.log(data)
    getNotes(data.data)
  })
}, [])

  return (
    <NoteContext.Provider
      value={{
        notes,
        getNotes,
        createNote,
        updateNote,
        currentId,
        setCurrentId,
        deleteNote,
        currentUser: user,
        userIsAuthenticated :isAuthenticated,
        userIsLoading: isLoading,
        modalOpen,
        setModalOpen
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};