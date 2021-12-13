import React, { useContext, useState } from "react";
// import { SortableContainer, arrayMove } from "react-sortable-hoc";
import { arrayMoveImmutable} from "array-move";

import Notes from '../components/notes/Notes'
import { NoteContext } from "./NoteContext";



const NoteList = () => {
  const { notes } = useContext(NoteContext);

  const [listNote, setListNote] = useState(notes);

  console.log(notes);
  console.log(listNote);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let arr = arrayMoveImmutable(notes, oldIndex, newIndex);
    for (let i = 0; i < arr.length; i++) {
      arr[i].position = i;
    }
    console.log(arr)
    setListNote(arr);
    console.log(listNote);
  };

  console.log(listNote);

  return (
    <Notes notes={listNote} onSortEnd={onSortEnd} axis="xy" />
  )
};

export default NoteList;