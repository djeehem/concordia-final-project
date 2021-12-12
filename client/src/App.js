import React from 'react';

import GlobalStyles from '../src/components/GlobalStyles';
import Notes from './components/notes/Notes';
import Form from './components/form/Form';
import NavBar from '../src/components/NavBar';
import NoteModal from './components/NoteModal';

const App = () => {

  return (
    <>
    <GlobalStyles />
    <NavBar />
    <NoteModal />
      {/* <Form /> */}
      <Notes />
    </>
  )
}

export default App;
