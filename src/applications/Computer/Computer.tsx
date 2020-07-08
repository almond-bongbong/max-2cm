import React, { ReactElement } from 'react';
import Icon from 'components/Icon';
import taskSlice from 'store/modules/task';
import notice from 'functions/notice';
import ComputerIcon from 'assets/images/icons/icon-computer.png';
import { useDispatch } from 'react-redux';

function Computer(): ReactElement {
  const dispatch = useDispatch();

  return (
    <Icon
      icon={ComputerIcon}
      name="computer"
      handleDoubleClick={async (): Promise<void> => {
        dispatch(taskSlice.actions.addTask({ name: 'computer', active: true }));
        await notice({ title: 'computer.exe', message: '준비중입니다.' });
        dispatch(taskSlice.actions.removeTask('computer'));
      }}
    />
  );
}

export default Computer;
