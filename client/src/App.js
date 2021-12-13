import React from 'react';

import GlobalStyles from '../src/components/GlobalStyles';
import Notes from './components/notes/Notes';
import NavBar from '../src/components/NavBar';
import NoteModal from './components/NoteModal';

const App = () => {

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <NoteModal />
      <Notes />
    </>
  )
}

export default App;
