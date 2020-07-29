import React, { ReactElement } from 'react';
import AppIcon from 'components/AppIcon';
import TetrisIcon from 'assets/images/icons/icon-tetris.png';
import useRunApplication from 'hooks/common/useRunApplication';
import AppWindow from 'components/AppWindow';
import TetrisApp from 'applications/Tetris/TetrisApp';

const appName = 'tetris';

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
      <AppIcon icon={TetrisIcon} name={appName} handleDoubleClick={handleRun} />
      <AppWindow run={running} name={appName} title={appName} onClose={handleStop}>
        <TetrisApp />
      </AppWindow>
    </>
  );
}

export default TetrisShortcut;
