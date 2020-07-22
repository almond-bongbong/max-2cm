import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import GlobalStyle from 'assets/styles/GlobalStyles';
import TaskBar from 'layouts/TaskBar';
import Desktop from 'components/Desktop';
import { store } from 'store/config';

const Container = styled.div``;

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={original}>
          <Desktop />
          <TaskBar />
        </ThemeProvider>
      </Container>
    </Provider>
  );
}

export default App;
