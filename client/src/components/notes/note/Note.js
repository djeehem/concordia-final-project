import React, { useContext } from 'react';
import styled from 'styled-components';

import { removeNote } from '../../../api'
import { NoteContext } from '../../NoteContext';
import Button from '../../Button';

const Note = ({ note }) => {
  const {
    setCurrentId,
    deleteNote,
    setModalOpen
  } = useContext(NoteContext);

  const handleDelete = () => {
    removeNote(note._id);
    deleteNote(note._id);
  }

  const handleEdit = () => {
    setCurrentId(note._id);
    setModalOpen(true);
  }

  return (
  // <Image src={note.selectedFile} />
    <Card>
        <Button onClick={ handleEdit }>Edit</Button>
        <Button onClick={ handleDelete }>Delete</Button>
        <CardTitle>{note.title}</CardTitle>
        <CardText>{note.note}</CardText>
    </Card>
  )
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  height: 20rem;
  margin: 3rem;
  box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s;
  border-left: 2px solid red;
  border-radius: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1.4rem 2.4rem rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.div`
  display: flex;
  align-self: center;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  /* text-decoration: underline; */
`;

const CardText = styled.div`
  display: flex;
  font-size: 1.6rem;
  align-self: center;
  text-align: center;
`;

// const Button = styled.div`
//   border: none;
//   align-self: center;
// `;

// const Image = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
// `;

export default Note;

// <!-- HTML !-->
// <button class="button-60" role="button">Button 60</button>

// /* CSS */
// .button-60 {
//   align-items: center;
//   appearance: none;
//   background-color: #fff;
//   border: 1px solid #dbdbdb;
//   border-radius: .375em;
//   box-shadow: none;
//   box-sizing: border-box;
//   color: #363636;
//   cursor: pointer;
//   display: inline-flex;
//   font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
//   font-size: 1rem;
//   height: 2.5em;
//   justify-content: center;
//   line-height: 1.5;
//   padding: calc(.5em - 1px) 1em;
//   position: relative;
//   text-align: center;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: top;
//   white-space: nowrap;
// }

// .button-60:active {
//   border-color: #4a4a4a;
//   outline: 0;
// }

// .button-60:focus {
//   border-color: #485fc7;
//   outline: 0;
// }

// .button-60:hover {
//   border-color: #b5b5b5;
// }

// .button-60:focus:not(:active) {
//   box-shadow: rgba(72, 95, 199, .25) 0 0 0 .125em;
// }