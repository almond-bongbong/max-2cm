import React, { ReactElement } from 'react';
import Icon from 'components/Icon';
import TetrisIcon from 'assets/images/icons/icon-tetris.png';
import useRunApplication from 'hooks/common/useRunApplication';
import AppWindow from 'components/AppWindow';
import TetrisApp from 'applications/Tetris/TetrisApp';

function TetrisShortcut(): ReactElement {
  const [running, run, stop] = useRunApplication(false);

  const handleRun = (): void => {
    run('tetris');
  };

  const handleStop = (): void => {
    stop('tetris');
  };

  return (
    <>
      <Icon icon={TetrisIcon} name="tetris" handleDoubleClick={handleRun} />
      <AppWindow run={running} title="tetris" onClose={handleStop}>
        <TetrisApp />
      </AppWindow>
    </>
  );
}

export default TetrisShortcut;
