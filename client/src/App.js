import React, { useContext } from 'react';

import GlobalStyles from '../src/components/GlobalStyles';
import NoteList from '../src/components/NoteList'
import NavBar from '../src/components/navbar/Navbar';
import NoteModal from './components/NoteModal';
import { NoteContext } from './components/NoteContext';
import Landing from './components/Landing';

const App = () => {
  const {
    currentUser
} = useContext(NoteContext);

  return (
    <>
      <GlobalStyles />
      {currentUser ?
      <>      
        <NavBar />
        <NoteModal />
        <NoteList />
      </> :
      <Landing />
      }
    </>
  )
}

export default App;
