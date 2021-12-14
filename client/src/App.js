import React from 'react';

import GlobalStyles from '../src/components/GlobalStyles';
import NoteList from '../src/components/NoteList'
import NavBar from '../src/components/navbar/Navbar';
import NoteModal from './components/NoteModal';

const App = () => {

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <NoteModal />
      <NoteList />
    </>
  )
}

export default App;
