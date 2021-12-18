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

  return (
    <Wrapper>
      <ColorButton
        onClick={(ev) => {
          ev.preventDefault();
          setShowColorPicker(showColorPicker => !showColorPicker)}
        }
      >
        {showColorPicker ? 'Close' : 'Pick a color'}
      </ColorButton>
      {showColorPicker && (
        <PickerWrapper>
          <CirclePicker
            onChange={(ev) => {
              setNoteData({ ...noteData, noteColor: ev.hex })
            }}
          />
        </PickerWrapper>
      )}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  position: relative;
`;

const ColorButton = styled(Button)`

`;

const PickerWrapper = styled.div`
  z-index: 10;
  background: white;
  position: absolute;
`;

export default ColorPicker;