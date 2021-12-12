import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import LoginButton from './LoginButton';
import LogoutButton from "./LogoutButton";
import Profile from './Profile';
import { NoteContext } from "./NoteContext";

const NavBar = () => {
  const { setModalOpen, currentUser } = useContext(NoteContext);

  const handleCreateNoteModal = () => {

  }

  return (
    <Wrapper>
          <button onClick={ () => setModalOpen(true) }>Create note</button>
          <Searchbar>

          </Searchbar>
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
  /* background: var(--color-alabama-crimson); */
  height: 110px;
  /* padding: var(--padding-page) 18px; */
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const StyledNavLink = styled(NavLink)`
  /* background: var(--color-selective-yellow); */
  border: 1px solid transparent;
  border-radius: 4px;
  /* color: var(--color-alabama-crimson); */
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: var(--font-heading); */
  font-size: 18px;
  height: 42px;
  margin: 0 0 0 8px;
  padding: 0 14px;
  width: 100%;
  text-decoration: none;
  transition: all ease 400ms;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    /* background: var(--color-alabama-crimson);
    color: var(--color-selective-yellow);
    border-color: var(--color-selective-yellow); */
  }
`;

const Searchbar = styled.div`

`;

const Toolbar = styled.div`

`;



export default NavBar;