import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const CircularLoading = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  )
};

export default CircularLoading;

const Wrapper = styled.div`
display: flex;
width: 100vw;
height: 100vh;
align-items: center;
justify-content: center;
`;