import React from 'react';

// import { NoteContext } from '../src/components/NoteContext';
import GlobalStyles from '../src/components/GlobalStyles';
// import { fetchNotes } from '../src/api/index';
import Notes from './components/notes/Notes';
import Form from './components/form/Form';
import NavBar from '../src/components/NavBar';
import GameOverModal from '../src/components/Modal';

const App = () => {
  // const { notes, getNotes } = useContext(NoteContext);
  // const [currentId, setCurrentId] = useState(null)

  // console.log(currentId)

  // useEffect(() => {
  //   fetchNotes()
  //     .then(data => {
  //       getNotes(data.data)
  //     })
  // }, []);

  return (
    <>
    <GlobalStyles />
    <NavBar />
    {/* <GameOverModal /> */}
    <div>
      <Form
        // currentId={currentId}
        // setCurrentId={setCurrentId}
      />
      <Notes
        // setCurrentId={setCurrentId}
      />
    </div>
    </>
  )
}

export default App;
