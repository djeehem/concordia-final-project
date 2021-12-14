import React, { useState } from 'react';
import { CirclePicker } from 'react-color';



const ColorPicker = () => {
  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div>
      <button
        onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
      >
        {showColorPicker ? 'Close color picker' : 'Pick a color'}
      </button>
      {showColorPicker && (
        <CirclePicker
          color={color}
          onChange={updatedColor => setColor(updatedColor.hex)}
        />
      )}
      <h2>You picked {color}</h2>
    </div>
  )
};

export default ColorPicker;