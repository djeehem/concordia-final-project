import React, { useContext } from "react";
import styled from "styled-components";

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
      <InnerWrapper>
        <Button onClick={ () => setModalOpen(true) }>Create note</Button>
        <Searchbar />
        <Toolbar>
          {currentUser ? 
          <>
            <LogoutButton />
            <Profile />
          </> : 
            <LoginButton />
          }
        </Toolbar>
      </InnerWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.header`
  height: 5rem;
`;

const InnerWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  align-items: center;
`;

const Toolbar = styled.div``;

export default Navbar;