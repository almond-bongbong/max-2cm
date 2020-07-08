import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Computer, Note, Tetris } from 'applications';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 43px);
  padding: 5px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-content: start;
`;

function Desktop(): ReactElement {
  return (
    <Container>
      <Computer />
      <Note />
      <Tetris />
    </Container>
  );
}

export default Desktop;
