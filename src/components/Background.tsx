import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import NoteIcon from '../images/icons/icon_note.png';

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
        name="Note"
        handleDoubleClick={() => {
          window.open(
            'https://www.notion.so/maxxlee/Max-s-2837e7f09c574389b0208204b10c72b7',
            '_blank'
          );
        }}
      />
    </Container>
  );
}

export default Background;
