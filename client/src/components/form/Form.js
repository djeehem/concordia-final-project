import React, { useContext, useEffect } from 'react';
import { Editor } from "@tinymce/tinymce-react";
import FileBase from 'react-file-base64';
import styled from 'styled-components';

import { createNoteApi, updateNoteApi } from '../../api/index'
import { NoteContext } from '../NoteContext';
import { getNotesApi } from '../../api/index';
import ColorPicker from '../ColorPicker';
import Button from '../Button'

const Form = () => {
  const {
    notes,
    createNote,
    updateNote,
    currentId,
    setCurrentId,
    currentUser,
    getNotes,
    setModalOpen,
    noteData,
    setNoteData
  } = useContext(NoteContext);

  const noteToUpdate = notes.find(note => note._id === currentId);

  useEffect(() => {
    if (noteToUpdate) {
      setNoteData(noteToUpdate);
    }
  }, [setNoteData, noteToUpdate]);

  const clear = () => {
    setCurrentId(null)
    setNoteData({
      title: '',
      note: '',
      noteColor: '',
      email: '',
      position: ''
    })
  };

  const handleChange = (note, editor) => {
    setNoteData({ ...noteData, note })
  };

  const cancel = () => {
    clear() ;
    setModalOpen(false)
  };
  
  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (noteData.title || noteData.note) {
      if (currentId === null) {

        createNoteApi({...noteData, email: currentUser.email, position: notes.length})
        //   .then(data => {
        //   createNote(data.data)
        // })
        .then(() => getNotesApi(currentUser.email))
        .then(data => {
          getNotes(data.data)
        })
      } else {
        updateNoteApi(currentId, noteData)
          .then(data => {
          updateNote(data.data)
        })
      }
      clear();
      setModalOpen(false);
    }
  }

  return (
    <NoteForm onSubmit={ handleSubmit }>
      <Header>
        <ColorPicker />
        <TitleLabel>
          <TitleInput
            placeholder={'Your title here'}
            type="text"
            name="title"
            value={noteData.title}
            onChange={(ev) => setNoteData({ ...noteData, title: ev.target.value })}
          />
        </TitleLabel>
        <Buttons>
          <Button onClick={ clear }>Clear</Button>
          <Button onClick={ cancel }>Cancel</Button>
          <Button type="submit" value="Save">Save</Button>
        </Buttons>
      </Header>
      <label>
        <Editor
          apiKey='5yuasqcbf0nhgogvvsnlrrecdsxxyis9dwv7s68u8avgluqd'
          value={noteData.note}
          init={{
            placeholder:'Your note here',
            height: 300,
            menubar: false,
            forced_root_block : false,
          }}
          onEditorChange={ handleChange }
        />
      </label>
      <NoteImageWrapper>
        {/* <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setNoteData({ ...noteData, selectedFile: base64})}
        /> */}
      </NoteImageWrapper>
    </NoteForm>
  )
}

const NoteForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const NoteImageWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Header = styled.div`
  display: flex;
  margin: 0 0 1rem 0;
`;

const TitleLabel = styled.label`
  display: flex;
  margin-left: auto;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-right: 1rem;
`;

const TitleInput = styled.input`
  border: none;

  &:focus{
    /* border: none; */
    outline: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-left: auto;
  gap: 0.3rem;
`;

export default Form;
