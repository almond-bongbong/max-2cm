import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themes } from 'react95';
import GlobalStyle from 'assets/styles/GlobalStyles';
import TaskBar from 'layouts/TaskBar';
import Background from 'components/Background';

const Container = styled.div``;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <ThemeProvider theme={themes.default}>
        <Background />
        <TaskBar />
      </ThemeProvider>
    </Container>
  );
}

export default App;
