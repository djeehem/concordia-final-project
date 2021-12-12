import React, { useContext } from 'react';
import styled from 'styled-components';
// import CircularProgress from '@material-ui/core/CircularProgress';

import Note from './note/Note';
import { NoteContext } from '../NoteContext';

const Notes = () => {
  const {
    notes,
  } = useContext(NoteContext);

  return (
    <Grid>       
      {notes && notes.map(note => {
        return (
          <Note
            key={note._id} note={note}
          />
        )
      })}
    </Grid>
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
