import React, {createContext, useReducer, useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import { getNotesApi } from '../api/index';
import {
  GET_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE_POSITIONS } from '../constants/actionsTypes';

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
    case UPDATE_NOTE_POSITIONS:{
      return action.payload
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
    dispatch({
      type: CREATE_NOTE,
      payload: data
    });
  };

  const updateNote = (data) => {
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
  };

  const updateNotePositions = (data) => {
    dispatch({
      type: UPDATE_NOTE_POSITIONS,
      payload: data
    })
  };

  const [noteData, setNoteData] = useState({
    title: '',
    note: '',
    noteColor: '',
    email: '',
    position: ''
  });

  const [color, setColor] = useState('#DCDCDC');

  useEffect(() => {
    if (user !== undefined) {
      const email = user.email
      getNotesApi(email)
      .then(data => {
        getNotes(data.data)
      })
    }
  }, [user])

  const [value, setValue] = useState('');

  const [suggestionList, setSuggestionList] = useState([]);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const suggestions = notes;

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
        updateNotePositions,
        currentUser: user,
        userIsAuthenticated :isAuthenticated,
        userIsLoading: isLoading,
        modalOpen,
        setModalOpen,
        noteData,
        setNoteData,
        color,
        setColor,
        value,
        setValue,
        suggestionList,
        setSuggestionList,
        suggestions,
        isCollapsed, 
        setIsCollapsed
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};