import React, { ReactElement } from 'react';
import Icon from 'components/Icon';
import TetrisIcon from 'assets/images/icons/icon-tetris.png';
import useToggle from 'hooks/common/useToggle';
import AppWindow from 'components/AppWindow';

function Tetris(): ReactElement {
  const [running, run, stop] = useToggle(false);

  return (
    <>
      <Icon icon={TetrisIcon} name="tetris" handleDoubleClick={run} />
      <AppWindow run={running} title="tetris" onClose={stop}>
        <ul>
          <li>something here</li>
          <li>something here</li>
          <li>something here</li>
          <li>something here</li>
        </ul>
      </AppWindow>
    </>
  );
}

export default Tetris;
