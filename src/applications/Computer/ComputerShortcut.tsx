import React, { ReactElement } from 'react';
import AppIcon from 'components/AppIcon';
import taskSlice from 'store/modules/task';
import notice from 'functions/notice';
import ComputerIcon from 'assets/images/icons/icon-computer.png';
import { useDispatch } from 'react-redux';

function ComputerShortcut(): ReactElement {
  const dispatch = useDispatch();

  return (
    <AppIcon
      icon={ComputerIcon}
      name="computer"
      handleDoubleClick={async (): Promise<void> => {
        dispatch(taskSlice.actions.addTask({ name: 'computer', active: true }));
        await notice({ title: 'computer.exe', message: 'In ready.' });
        dispatch(taskSlice.actions.removeTask('computer'));
      }}
    />
  );
}

export default ComputerShortcut;
