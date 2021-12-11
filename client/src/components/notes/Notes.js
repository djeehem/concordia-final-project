import React, { useContext } from 'react';
import styled from 'styled-components';
// import CircularProgress from '@material-ui/core/CircularProgress';

import Note from './note/Note';
import { NoteContext } from '../NoteContext';

const Notes = () => {
  const {
    notes,
    // getNotes,
    // currentId,
    // setCurrentId
  } = useContext(NoteContext);

  console.log(notes)

  return (
    <>
      {/* {notes && */}
        <Grid>       
          {notes.map(note => (
            <Note
              key={note._id} note={note}
              // setCurrentId={setCurrentId}
            />
          ))}
        </Grid>
      {/* } */}
    </>
  )
}

const Grid = styled.div`
  max-width: 100%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  text-align: center;
`;

export default Notes;
