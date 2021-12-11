import React from "react";
import styled from "styled-components";

const GameOverModal = ({}) => {
  return (
    <Wrapper>
      <Content>
        <Heading>You ___ !!🤩😱</Heading>
        <Word>👉 the word 👈</Word>
      </Content>
    </Wrapper>
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
  z-index: 2;
`;
const Content = styled.div`
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 300px;
  padding: 20px;
`;
const Heading = styled.p`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;
const Word = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 18px 0;
`;

export default GameOverModal;