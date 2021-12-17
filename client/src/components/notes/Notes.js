import React, { useContext } from 'react';
import styled from 'styled-components';
import { SortableContainer } from "react-sortable-hoc";
import ReactHtmlParser from "react-html-parser";
import Button from '../Button';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { removeNote } from '../../api';

import Note from './note/Note';
import { NoteContext } from '../NoteContext';

const Notes = SortableContainer(({ listNote}) => {
  const {
    notes,
    value,
    setValue,
    suggestionList,
    setSuggestionList,
    suggestions,
    getNotes,
    createNote,
    updateNote,
    currentId,
    setCurrentId,
    deleteNote,
    updateNotePosition,
    currentUser: user,
    userIsAuthenticated :isAuthenticated,
    userIsLoading: isLoading,
    modalOpen,
    setModalOpen,
    suggestion
  } = useContext(NoteContext);

  // const handleDelete = () => {
  //   removeNote(suggestion._id);
  //   deleteNote(suggestion._id);
  // }

  // const handleEdit = () => {
  //   setCurrentId(suggestion._id);
  //   setModalOpen(true);
  // }

  console.log(suggestionList)

    return (
    <>
      {value.length > 1 ?
        <Grid>
          {suggestionList.sort((a, b) => a.position - b.position)
            .map((value, index) => (
              <Note
                key={value._id}
                index={index}
                value={value}
              />
            ))
          }
          </Grid>:
          <Grid>
          {notes.sort((a, b) => a.position - b.position)
            .map((value, index) => (
              <Note
                key={value._id}
                index={index}
                value={value}
              />
            ))
          }
        </Grid>
      }
    </>
  )

  // return (
  //   <>
  //     {suggestionList.length > 0 ?
  //     <div>
  //       {suggestionList.map(suggestion => (
  //         <>
  //           <div>{suggestion.title}</div>
  //           <div>{ ReactHtmlParser(suggestion.note) }</div>
  //         </>
  //       ))}
  //       </div> :
  //     <Grid>
  //     {notes.sort((a, b) => a.position - b.position)
  //       .map((value, index) => (
  //         <Note
  //           key={value._id}
  //           index={index}
  //           value={value}
  //         />
  //       ))
  //       }
  //     </Grid>
  //     }
  //   </>
  // )
});

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
  background-color: #f7f7f7;
  margin: 3rem;
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
  display: flex;
  font-size: 1.6rem;
  margin: 1rem;
`;

export default Notes;
