import React, { ReactElement } from 'react';
import Icon from 'components/Icon';
import TetrisIcon from 'assets/images/icons/icon-tetris.png';
import { Button, Window, WindowContent, WindowHeader } from 'react95';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import useToggle from 'hooks/common/useToggle';

const WindowHeaderContainer = styled(WindowHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled(Button)`
  margin-right: -6px;
  margin-top: 1px;

  span {
    font-weight: bold;
    transform: translateY(-1px);
  }
`;

function Tetris(): ReactElement {
  const [running, run, stop] = useToggle(false);

  return (
    <>
      <Icon icon={TetrisIcon} name="tetris" handleDoubleClick={run} />
      {running && (
        <Draggable handle={`.${WindowHeaderContainer.styledComponentId}`}>
          <Window style={{ width: 400 }}>
            <WindowHeaderContainer>
              <span>react95.exe</span>
              <CloseButton size={'sm'} square onClick={stop}>
                <span>x</span>
              </CloseButton>
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
      )}
    </>
  );
}

export default Tetris;
