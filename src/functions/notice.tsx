import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Window, WindowContent, WindowHeader } from 'react95';
import original from 'react95/dist/themes/original';
import { addRootElement } from 'libs/generateElement';
import styled, { ThemeProvider } from 'styled-components';
import { CloseIcon } from 'assets/styles/Icons';

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

interface Options {
  title: string;
  message: string;
}

function notice({ title, message }: Options): Promise<void> {
  const container = document.getElementById(CONTAINER_ID);

  return new Promise((resolve) => {
    const handleClose = (): void => {
      if (container) {
        ReactDOM.unmountComponentAtNode(container);
        resolve();
      }
    };

    ReactDOM.render(
      <ThemeProvider theme={original}>
        <WindowContainer>
          <Header>
            <span>{title}</span>
            <Button onClick={handleClose}>
              <CloseIcon />
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
