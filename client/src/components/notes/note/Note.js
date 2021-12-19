import React, { useContext } from 'react';
import styled from 'styled-components';
import { SortableElement } from "react-sortable-hoc";
import ReactHtmlParser from "react-html-parser";

import { deleteNoteApi } from '../../../api'
import { NoteContext } from '../../NoteContext';
import Button from '../../Button';

const Note = SortableElement(({ value }) => {
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
    // <Image src={value.selectedFile} />
    <Card
      style={ value.noteColor ? { 'border': `0.2rem solid ${value.noteColor}` } : { 'border': `0.2rem solid #DCDCDC` }}
    >
      <Header>
        <CardTitle>{value.title}</CardTitle>
        <Buttons>
          <Button onClick={ handleEdit }>Edit</Button>
          <Button onClick={ handleDelete }>Delete</Button>
        </Buttons>
      </Header>
        <Division />
      <CardText>{ ReactHtmlParser(value.note) }</CardText>
    </Card>
  )
});

const Card = styled.div`
  word-break: break-word;
  overflow: hidden;
  height: 20rem;
  margin: 3rem;
  box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s;
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
  margin-left: auto;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-right: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  margin-left: auto;
  gap: 0.3rem;
`;

const Division = styled.div`
  display: flex;
  border-bottom: 1px solid #DCDCDC;
  width: 60%;
  margin: auto;
`;

const CardText = styled.div`
  font-size: 1.6rem;
  margin: 1rem;
`;

export default Note;


// import React, { useContext } from 'react';
// import styled from 'styled-components';
// import { SortableElement } from "react-sortable-hoc";
// import ReactHtmlParser from "react-html-parser";

// import { deleteNoteApi } from '../../../api'
// import { NoteContext } from '../../NoteContext';
// import Button from '../../Button';

// const Note = SortableElement(({ value }) => {
//   const {
//     setCurrentId,
//     deleteNote,
//     setModalOpen
//   } = useContext(NoteContext);

//   const handleDelete = () => {
//     deleteNoteApi(value._id);
//     deleteNote(value._id);
//   }

//   const handleEdit = () => {
//     setCurrentId(value._id);
//     setModalOpen(true);
//   }

//   return (
//     // <Image src={value.selectedFile} />
//     <Card
//       style={ value.noteColor ? { 'border': `0.2rem solid ${value.noteColor}` } : { 'border': `0.2rem solid #DCDCDC` }}
//     >
//       <Header>
//         <CardTitle>{value.title}</CardTitle>
//         <Buttons>
//           <Button onClick={ handleEdit }>Edit</Button>
//           <Button onClick={ handleDelete }>Delete</Button>
//         </Buttons>
//       </Header>
//         <Division />
//       <CardText>{ ReactHtmlParser(value.note) }</CardText>
//     </Card>
//   )
// });

// const Card = styled.div`
//   word-break: break-word;
//   overflow: hidden;
//   height: 20rem;
//   margin: 3rem;
//   box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.2);
//   cursor: pointer;
//   transition: all 0.3s;
//   border-radius: 1rem;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 1.4rem 2.4rem rgba(0, 0, 0, 0.2);
//   }
// `;

// const Header = styled.div`
//   display: flex;
//   margin: 1rem;
// `;

// const CardTitle = styled.div`
//   display: flex;
//   margin-left: auto;
//   text-align: center;
//   font-size: 2rem;
//   font-weight: 700;
//   margin-right: 1rem;
// `;

// const Buttons = styled.div`
//   display: flex;
//   margin-left: auto;
//   gap: 0.3rem;
// `;

// const Division = styled.div`
//   display: flex;
//   border-bottom: 1px solid #DCDCDC;
//   width: 60%;
//   margin: auto;
// `;

// const CardText = styled.div`
//   font-size: 1.6rem;
//   margin: 1rem;
// `;

// export default Note;
