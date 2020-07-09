import React, { ReactElement } from 'react';
import Icon from 'components/Icon';
import TetrisIcon from 'assets/images/icons/icon-tetris.png';
import { Window, WindowHeader, WindowContent, Button } from 'react95';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const WindowHeaderContainer = styled(WindowHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Tetris(): ReactElement {
  const run = (): void => {
    console.log('hello');
  };

  return (
    <>
      <Icon icon={TetrisIcon} name="tetris" handleDoubleClick={run} />
      <Draggable handle={`.${WindowHeaderContainer.styledComponentId}`}>
        <Window style={{ width: 400 }}>
          <WindowHeaderContainer>
            <span>react95.exe</span>
            <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
              <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
            </Button>
          </WindowHeaderContainer>
          <WindowContent>
            <ul>
              <li>something here</li>
              <li>something here</li>
              <li>something here</li>
              <li>something here</li>
            </ul>
          </WindowContent>
        </Window>
      </Draggable>
    </>
  );
}

export default Tetris;
