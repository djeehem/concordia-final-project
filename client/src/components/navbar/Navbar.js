import React, { useContext } from "react";
import styled from "styled-components";
// import { NavLink } from "react-router-dom";

import LoginButton from './LoginButton';
import LogoutButton from "./LogoutButton";
import Profile from '../Profile';
import { NoteContext } from "../NoteContext";
import Button from '../Button';
import Searchbar from "./Searchbar";

const Navbar = () => {
  const { setModalOpen, currentUser } = useContext(NoteContext);

  return (
    <Wrapper>
      <Button onClick={ () => setModalOpen(true) }>Create note</Button>
      <Searchbar />
      <Toolbar>
        {currentUser ? (
          <>
            <LogoutButton />
            <Profile />
          </>
        ) : (
          <LoginButton />
        )}
      </Toolbar>
    </Wrapper>
  )
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 4rem;
`;

const Toolbar = styled.div``;

export default Navbar;