import React, { useState, useContext } from 'react';
import { CirclePicker } from 'react-color';
import styled from 'styled-components';

import { NoteContext } from './NoteContext';
import Button from './Button';

const ColorPicker = () => {
  const {
    noteData,
    setNoteData
  } = useContext(NoteContext)

  const [showColorPicker, setShowColorPicker] = useState(false);

  console.log(noteData)

  return (
    <div>
      <ColorButton
        onClick={(ev) => {
          ev.preventDefault();
          setShowColorPicker(showColorPicker => !showColorPicker)}
        }
      >
        {showColorPicker ? 'Close' : 'Pick a color'}
      </ColorButton>
      {showColorPicker && (
        <CirclePicker
          onChange={(ev) => {
            setNoteData({ ...noteData, noteColor: ev.hex})
          }}
        />
      )}
      <h2>Color: {noteData.noteColor}</h2>
    </div>
  )
};
const ColorButton = styled(Button)`

`;

export default ColorPicker;