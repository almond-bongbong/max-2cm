import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ComputerShortcut, NoteShortcut, TetrisShortcut } from 'applications';

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
      <ComputerShortcut />
      <NoteShortcut />
      <TetrisShortcut />
    </Container>
  );
}

export default Desktop;
