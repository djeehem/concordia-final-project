import React, { useContext } from 'react';
import styled from 'styled-components';
import { removeNote } from '../../../api'


import { NoteContext } from '../../NoteContext';

const Note = ({ note }) => {
  const {
    setCurrentId,
    deleteNote
  } = useContext(NoteContext);

  const handleDelete = () => {
    removeNote(note._id);
    deleteNote(note._id);
  }

  return (
    <Wrapper>
      <Image
        src={note.selectedFile}
      />
      <Card>
        <Container>
          <button onClick={() => setCurrentId(note._id)}>Edit</button>
          <button onClick={ handleDelete }>Delete</button>
          <h4><b>{note.title}</b></h4>
          <p>{note.note}</p>
        </Container>
      </Card>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  width: 30%;
  height: 100px;
  align-items: center;
  gap: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Card = styled.div`
  width: 80%;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  overflow-wrap: break-word;
  overflow: hidden;

  &&hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const Container = styled.div`
  padding: 2px 16px;
`;

export default Note;