import React, { useContext } from 'react';
import styled from 'styled-components';
import { SortableContainer } from "react-sortable-hoc";
// import CircularProgress from '@material-ui/core/CircularProgress';

import Note from './note/Note';
import { NoteContext } from '../NoteContext';

const Notes = SortableContainer(({ listNote}) => {
  const {
    notes,
  } = useContext(NoteContext);

  return (
    <Grid>
      {notes && notes
        .sort((a, b) => a.position - b.position)
        .map((value, index) => (
          <Note
            key={value._id} index={index} value={value}
          />
        ))
      }
    </Grid>
  );
});

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
  background-color: #f7f7f7;
  margin: 3rem;
`;

export default Notes;
