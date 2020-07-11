import React, { ReactElement } from 'react';
import Icon from 'components/Icon';
import TetrisIcon from 'assets/images/icons/icon-tetris.png';
import { Button, Window, WindowContent, WindowHeader } from 'react95';
import styled from 'styled-components';
import useToggle from 'hooks/common/useToggle';
import { Rnd } from 'react-rnd';

const WindowContainer = styled(Window)`
  width: 600px;
  height: 800px;
`;

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
        <Rnd
          enableResizing={{
            top: false,
            topLeft: false,
            topRight: false,
            left: false,
            right: false,
            bottom: false,
            bottomLeft: false,
            bottomRight: false,
          }}
          dragHandleClassName={WindowHeaderContainer.styledComponentId}
        >
          <WindowContainer>
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
          </WindowContainer>
        </Rnd>
      )}
    </>
  );
}

export default Tetris;
