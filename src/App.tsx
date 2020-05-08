import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from 'react95';
import GlobalStyle from './styles/GlobalStyles';
import TaskBar from './layouts/TaskBar';

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={themes.default}>
        <TaskBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
