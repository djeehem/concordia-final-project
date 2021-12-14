import React, { useContext } from 'react';
import styled from 'styled-components';
import { SortableElement } from "react-sortable-hoc";

import { removeNote } from '../../../api'
import { NoteContext } from '../../NoteContext';
import Button from '../../Button';

const Note = SortableElement(({ value }) => {
  const {
    setCurrentId,
    deleteNote,
    setModalOpen
  } = useContext(NoteContext);

  const handleDelete = () => {
    removeNote(value._id);
    deleteNote(value._id);
  }

  const handleEdit = () => {
    setCurrentId(value._id);
    setModalOpen(true);
  }

  return (
    // <Image src={value.selectedFile} />
  <Card>
    <Header>
      <CardTitle>{value.title}</CardTitle>
      <Buttons>
        <Button onClick={ handleEdit }>Edit</Button>
        <Button onClick={ handleDelete }>Delete</Button>
      </Buttons>
    </Header>
    <CardText>{value.note}</CardText>
  </Card>
  )
});

const Card = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  height: 20rem;
  margin: 3rem;
  box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s;
  border: 0.05rem solid #DCDCDC;
  border-radius: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1.4rem 2.4rem rgba(0, 0, 0, 0.2);
  }
`;

const Header = styled.div`
  display: flex;
  margin: 1rem;
`;

const CardTitle = styled.div`
  display: flex;
  align-self: flex-start;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  /* text-decoration: underline; */
`;

const Buttons = styled.div`
  display: flex;
  align-self: flex-end;
  /* grid-template-columns: 1fr 1fr; */
`;

const CardText = styled.div`
  display: flex;
  font-size: 1.6rem;
  align-self: center;
  text-align: center;
  margin: 1rem;
`;

export default Note;
