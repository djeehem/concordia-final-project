import React, { useContext, useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import styled from 'styled-components';

import { addNote, modifyNote } from '../../api/index'
import { NoteContext } from '../NoteContext';
import { fetchNotes } from '../../api/index'

const Form = () => {
  const { notes,
      createNote,
      updateNote,
      currentId,
      setCurrentId,
      currentUser,
      userIsAuthenticated,
      getNotes
  } = useContext(NoteContext);
  
  const noteToUpdate = notes.find(note => note._id === currentId);

  const [noteData, setNoteData] = useState({
    title: '',
    note: '',
    selectedFile: '',
    email: ''
  })

  console.log(currentUser)

  useEffect(() => {
    if (noteToUpdate) {
      setNoteData(noteToUpdate);
    }
  }, [noteToUpdate])

  const clear = () => {
    console.log(456)
    setCurrentId(null)
    setNoteData({
      title: '',
      note: '',
      selectedFile: '',
      email: ''
    })
  }
  
  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (noteData.title || noteData.note) {
      if (currentId === null) {
        console.log(currentUser.email)

        console.log(noteData)
        addNote({...noteData, email: currentUser.email})
          .then(data => {
          createNote(data.data)
        })
        // .then(() => fetchNotes(currentUser.email))
        .then(() => fetchNotes())
        .then(data => {
          console.log(123)
          getNotes(data.data)
        })
      } else {
        modifyNote(currentId, noteData)
          .then(data => {
          updateNote(data.data)
        })
      }
      clear();
    }
  }

  return (
    // userIsAuthenticated && (
      
      <>
      <h1>{ currentId ? 'Edit' : 'Create' } note</h1>
      <NoteForm onSubmit={ handleSubmit }>
        <label>
          <input placeholder={'Title'} type="text" name="title" value={noteData.title} onChange={(ev) => setNoteData({ ...noteData, title: ev.target.value })} />
        </label>
        <label>
          <textarea placeholder={'Your note here'} value={noteData.note} onChange={(ev) => setNoteData({ ...noteData, note: ev.target.value})} />
        </label>
        <NoteImageWrapper>
          {/* <div>
            <label for="favcolor">Select color:</label>
            <input type="color" id="favcolor" name="favcolor" value="#ff0000" />
          </div>
          <span> or </span> */}
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setNoteData({ ...noteData, selectedFile: base64})}
          />
        </NoteImageWrapper>
        <Button onClick={ clear }>Clear</Button>
        <input type="submit" value="Save" />
      </NoteForm>
    </>
    // )
  )
}

const NoteForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const NoteImageWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Button = styled.button`

`;

export default Form;
