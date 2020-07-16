import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #777;
`;

function TetrisApp(): ReactElement {
  return <Container>Welcome to Tetris</Container>;
}

export default TetrisApp;
