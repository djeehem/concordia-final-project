import React, { useContext } from 'react';
import styled from 'styled-components';
import { SortableContainer } from "react-sortable-hoc";
// import CircularProgress from '@material-ui/core/CircularProgress';

import FilteredNote from './note/FilteredNote'
import FilteredCollapsedNote from './note/FilteredCollapsedNote';
import { NoteContext } from '../NoteContext';

const FilteredNotes = () => {
  const {
    suggestionList,
    isCollapsed
  } = useContext(NoteContext);

  return (
    <>
      { isCollapsed ?
        <List>
          {suggestionList.map((value, index) => (              
              <FilteredCollapsedNote
                key={value._id}
                index={index}
                value={value}
              />
            ))
          }
        </List> :
        <Grid>
          {suggestionList.map((value, index) => (
              <FilteredNote
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
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  background-color: #f7f7f7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
  background-color: #f7f7f7;
  margin: 3rem;
`;

export default FilteredNotes;