import React, {
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import { Button, Window, WindowContent, WindowHeader } from 'react95';
import styled from 'styled-components';

const Container = styled(Window)`
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 800px;
`;

const HeaderWrap = styled.div`
  & * {
    user-select: none;
  }
`;

const Header = styled(WindowHeader)`
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

interface Props {
  run: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

function AppWindow({ run, title, children, onClose }: Props): ReactElement {
  const startPosition = useRef([0, 0]);
  const [[x, y], setPosition] = useState([0, 0]);

  const handleDrag = useCallback((e: MouseEvent): void => {
    const { clientX, clientY } = e;
    const [lastX, lastY] = startPosition.current;
    setPosition([clientX - lastX, clientY - lastY]);
  }, []);

  const handleDragEnd = useCallback((): void => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);
  }, [handleDrag]);

  const handleDragStart = useCallback(
    (e: SyntheticEvent<HTMLDivElement, MouseEvent>): void => {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleDragEnd);
      startPosition.current = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
    },
    [handleDrag, handleDragEnd]
  );

  return (
    <>
      {run && (
        <Container
          style={{
            transform: `translate3D(${x}px, ${y}px, 0)`,
          }}
        >
          <HeaderWrap onMouseDown={handleDragStart}>
            <Header>
              <span>{title}</span>
              <CloseButton size="sm" square onClick={onClose}>
                <span>x</span>
              </CloseButton>
            </Header>
          </HeaderWrap>
          <WindowContent>{children}</WindowContent>
        </Container>
      )}
    </>
  );
}

export default AppWindow;
