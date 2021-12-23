import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from '../src/components/GlobalStyles';
import NoteList from '../src/components/NoteList'
import NavBar from '../src/components/navbar/Navbar';
import NoteModal from './components/NoteModal';
import { NoteContext } from './components/NoteContext';
import Landing from './components/Landing';
import CircularLoading from './components/CircularLoading';

const App = () => {
  const {
    isLoading,
    isAuthenticated
} = useContext(NoteContext);

  return (
    <Router>
      <GlobalStyles />
      {isLoading ?
      <CircularLoading /> :
      isAuthenticated ?
      <>      
        <NavBar />
        <NoteModal />
        <NoteList />
      </> :
      <Landing />
      }
    </Router>
  )
}

export default App;
