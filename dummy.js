// const ColorPicker = () => {
  //   const {
  //     color,
  //     setColor,
  //     notes,
  //     noteData,
  //     setNoteData
  //   } = useContext(NoteContext)
  
  //   const [showColorPicker, setShowColorPicker] = useState(false);
  
  //   // const handleEdit = () => {
  //   //   setCurrentId(value._id);
  //   //   setModalOpen(true);
  //   // }
  
  //   const handlePickerClick = (ev) => {
  //     ev.stopPropagation();
  //     setShowColorPicker(true)
  //   }
  
  //   const handleChangeComplete = (color, event) => {
  //     // setColor(color.hex)
  //     // event.stopPropagation();
  //     setNoteData({ ...noteData, noteColor: color.hex})
  //     setShowColorPicker(false)
  //   }
  
  //   // onChange={(ev) => setNoteData({ ...noteData, note: ev.target.value})}
  
  //   console.log(noteData)
  
  //   return (
  //     <div>
  //       <ColorButton
  //         onClick={ handlePickerClick }
  //       >
  //         {showColorPicker ? 'Close' : 'Pick a color'}
  //       </ColorButton>
  //       {showColorPicker && (
  //         <CirclePicker
  //           color={color}
  //           onChangeComplete={ handleChangeComplete }
  //         />
  //       )}
  //       <h2>You picked {color}</h2>
  //     </div>
  //   )
  // };
  // const ColorButton = styled(Button)`
  
  // `;
  
  // export default ColorPicker;