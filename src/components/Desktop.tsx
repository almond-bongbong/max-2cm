import React, { ReactElement } from 'react';
import styled from 'styled-components';
import NoteIcon from 'assets/images/icons/icon-note.png';
import ComputerIcon from 'assets/images/icons/icon-computer.png';
import Icon from 'components/Icon';
import notice from 'functions/notice';
import { useDispatch } from 'react-redux';
import taskSlice from 'store/modules/task';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 43px);
  padding: 5px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-content: start;
`;

function Desktop(): ReactElement {
  const dispatch = useDispatch();

  return (
    <Container>
      <Icon
        icon={ComputerIcon}
        name="computer"
        handleDoubleClick={async (): Promise<void> => {
          dispatch(taskSlice.actions.addTask({ name: 'computer', active: true }));
          await notice({ title: 'computer.exe', message: '준비중입니다.' });
          dispatch(taskSlice.actions.removeTask('computer'));
        }}
      />
      <Icon
        icon={NoteIcon}
        name="note"
        handleDoubleClick={(): void => {
          window.open(
            'https://www.notion.so/maxxlee/Max-s-2837e7f09c574389b0208204b10c72b7',
            '_blank'
          );
        }}
      />
    </Container>
  );
}

export default Desktop;
