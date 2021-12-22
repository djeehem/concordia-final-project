import React from 'react';
import LoginButton from './navbar/LoginButton';
import styled from 'styled-components';

const Landing = () => {
  return (
    <Wrapper>
      <LoginButton />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default Landing;
