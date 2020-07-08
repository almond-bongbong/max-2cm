import React, { ReactElement } from 'react';
import Icon from 'components/Icon';
import TetrisIcon from 'assets/images/icons/icon-tetris.png';
import { Window, WindowHeader, WindowContent, Button } from 'react95';

function Tetris(): ReactElement {
  const run = (): void => {
    console.log('hello');
  };

  return (
    <>
      <Icon icon={TetrisIcon} name="tetris" handleDoubleClick={run} />
      <Window style={{ width: 400 }}>
        <WindowHeader
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>react95.exe</span>
          <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <ul>
            <li>something here</li>
            <li>something here</li>
            <li>something here</li>
            <li>something here</li>
          </ul>
        </WindowContent>
      </Window>
    </>
  );
}

export default Tetris;
