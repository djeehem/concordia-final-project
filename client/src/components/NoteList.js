import React, { useContext } from "react";
import { arrayMoveImmutable} from "array-move";

import Notes from '../components/notes/Notes'
import { NoteContext } from "./NoteContext";
import FilteredNotes from "./notes/FilteredNotes";

const NoteList = () => {
  const {
    searchValue,
    notes,
    updateNotePositions
  } = useContext(NoteContext);

  const onSortEnd = ({oldIndex, newIndex}) => {
    updateNotePositions(
      arrayMoveImmutable(notes, oldIndex, newIndex),
    );
  };

  return (
    searchValue.length < 2 ?
    <Notes onSortEnd={onSortEnd} axis="xy" /> :
    <FilteredNotes />
  )
};

export default NoteList;