import React, { useContext } from 'react';
import styled from 'styled-components';
import { SortableContainer } from "react-sortable-hoc";
// import CircularProgress from '@material-ui/core/CircularProgress';

import Note from './note/Note';
import { NoteContext } from '../NoteContext';
import CollapsedNote from './note/CollapsedNote';

const Notes = SortableContainer(() => {
  const {
    notes,
    isCollapsed
  } = useContext(NoteContext);

  console.log(notes)

  return (
    <>
      { isCollapsed ?
        <Grid>
          {notes.map((value, index) => (              
              <CollapsedNote
                key={value._id}
                index={index}
                value={value}
              />
            ))
          }
        </Grid> :
        <Grid>
          {notes.map((value, index) => (
              <Note
                key={value._id}
                index={index}
                value={value}
              />
          ))}
        </Grid>
      }
    </>
  )
});

// const List = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 3rem;
//   background-color: #f7f7f7;
// `;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
  background-color: #f7f7f7;
  margin: 3rem;
`;

export default Notes;
