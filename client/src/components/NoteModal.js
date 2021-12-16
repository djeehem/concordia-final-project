import React, { useContext } from "react";
import styled from "styled-components";

import Form from './form/Form'
import { NoteContext } from '../components/NoteContext';

const NoteModal = () => {
  const {
    modalOpen
} = useContext(NoteContext);

  return (
    modalOpen && (
    <Wrapper>
      <Content>
        <Form />
      </Content>
    </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;
const Content = styled.div`
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
  width: 80%;
  padding: 20px;
  border: 0.2rem solid #DCDCDC;
  border-radius: 1rem;
  box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.2);
`;

export default NoteModal;