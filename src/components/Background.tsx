import React from 'react';
import styled from 'styled-components';
import NoteIcon from 'assets/images/icons/icon-note.png';
import ComputerIcon from 'assets/images/icons/icon-computer.png';
import Icon from 'components/Icon';
import notice from '../functions/notice';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 43px);
  padding: 5px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-content: start;
`;

function Background() {
  return (
    <Container>
      <Icon
        icon={NoteIcon}
        name="note"
        handleDoubleClick={() => {
          window.open(
            'https://www.notion.so/maxxlee/Max-s-2837e7f09c574389b0208204b10c72b7',
            '_blank'
          );
        }}
      />
      <Icon
        icon={ComputerIcon}
        name="computer"
        handleDoubleClick={() => {
          notice('준비중입니다.');
        }}
      />
    </Container>
  );
}

export default Background;
