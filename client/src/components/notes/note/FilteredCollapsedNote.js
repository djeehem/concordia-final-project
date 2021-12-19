import React, { useContext } from 'react';
import styled from 'styled-components';
import { SortableElement } from "react-sortable-hoc";
import ReactHtmlParser from "react-html-parser";

import { deleteNoteApi } from '../../../api'
import { NoteContext } from '../../NoteContext';
import Button from '../../Button';


const FilteredCollapsedNote = ({ value }) => {
  const {
    setCurrentId,
    deleteNote,
    setModalOpen
  } = useContext(NoteContext);

  const handleDelete = () => {
    deleteNoteApi(value._id);
    deleteNote(value._id);
  }

  const handleEdit = () => {
    setCurrentId(value._id);
    setModalOpen(true);
  }
  
  return (
    <Card>
      <ColorDot style={ value.noteColor ? { background: value.noteColor } : { background: `#DCDCDC` }} />
      <CardTitle>{value.title}</CardTitle>
      <Buttons>
        <Button onClick={ handleEdit }>Edit</Button>
        <Button onClick={ handleDelete }>Delete</Button>
      </Buttons>
    </Card>
  )
};

const Card = styled.div`
  display: flex;
  align-items: center;
  word-break: break-word;
  overflow: hidden;
  height: 3rem;
  margin: 1rem 10rem;
  box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1.4rem 2.4rem rgba(0, 0, 0, 0.2);
  }
`;

const ColorDot = styled.div`
  display: flex;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
`;

const CardTitle = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-right: auto;
  /* text-align: center; */
  font-size: 2rem;
  font-weight: 500;
`;

const Buttons = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 1rem;
  gap: 0.3rem;
`;

export default FilteredCollapsedNote;