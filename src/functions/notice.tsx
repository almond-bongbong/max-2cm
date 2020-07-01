import React from 'react';
import ReactDOM from 'react-dom';
import { Button, themes, Window, WindowContent, WindowHeader } from 'react95';
import { addRootElement } from 'libs/generateElement';
import styled, { ThemeProvider } from 'styled-components';

const CONTAINER_ID = 'notice-container';

const WindowContainer = styled(Window)`
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = styled(WindowHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

addRootElement(CONTAINER_ID);

function notice(message: string): Promise<void> {
  const container = document.getElementById(CONTAINER_ID);

  return new Promise((resolve) => {
    const handleClose = (): void => {
      if (container) {
        ReactDOM.unmountComponentAtNode(container);
        resolve();
      }
    };

    ReactDOM.render(
      <ThemeProvider theme={themes.default}>
        <WindowContainer>
          <Header>
            <span>react95.exe</span>
            <Button
              onClick={handleClose}
              style={{ marginRight: '-6px', marginTop: '1px' }}
              size={'sm'}
              square
            >
              <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
            </Button>
          </Header>
          <WindowContent>{message}</WindowContent>
        </WindowContainer>
      </ThemeProvider>,
      container
    );
  });
}

export default notice;
