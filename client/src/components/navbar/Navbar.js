import React, { useContext } from "react";
import styled from "styled-components";

import LoginButton from './LoginButton';
import LogoutButton from "./LogoutButton";
import Profile from '../Profile';
import { NoteContext } from "../NoteContext";
import Button from '../Button';
import Searchbar from "./Searchbar";

const Navbar = () => {
  const { 
    setModalOpen, 
    currentUser,
    isCollapsed, 
    setIsCollapsed
  } = useContext(NoteContext);

  return (
    <Wrapper>
      <Buttons>
        <Button onClick={ () => setModalOpen(true) }>Create note</Button>
        <Button onClick={ () => { setIsCollapsed(isCollapsed => !isCollapsed) }}>
          { isCollapsed ? 'Expand All' : 'Collapse All' }
        </Button>
      </Buttons>
      <Searchbar />
      <Toolbar>
        {currentUser ? 
        <>
          <LogoutButton />
          <UserPicture 
            src={currentUser.picture}
            alt={currentUser.nickname}
            // onClick={}
          />
          {/* <Profile /> */}
        </> : 
          <LoginButton />
        }
      </Toolbar>
    </Wrapper>
  )
};

const Wrapper = styled.header`
  height: 5rem;
  display: flex;
  margin: 2rem;
  align-items: center;
  
`;

const Buttons = styled.div`
  display: flex;
  margin-right: auto;
  gap: 0.3rem;
`;

const UserPicture = styled.img`
  height: 5rem;
  border-radius: 50%;
  margin-left: 0.5rem;
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
`;

export default Navbar;