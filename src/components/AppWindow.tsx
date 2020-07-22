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

const Header = styled(WindowHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    user-select: none;
  }
`;

const CloseIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: -1px;
  transform: rotateZ(45deg);
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: #000;
  }

  &:before {
    height: 100%;
    width: 3px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    height: 3px;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
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
    const { pageX, pageY } = e;
    const [offsetX, offsetY] = startPosition.current;
    setPosition([pageX - offsetX - 8, pageY - offsetY - 8]);
  }, []);

  const handleDragEnd = useCallback((): void => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);
  }, [handleDrag]);

  const handleDragStart = useCallback(
    (e: SyntheticEvent<HTMLDivElement, MouseEvent>): void => {
      if (e.target === e.currentTarget) {
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', handleDragEnd);
        startPosition.current = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
      }
    },
    [handleDrag, handleDragEnd]
  );

  return (
    <>
      {run && (
        <Container
          className="window"
          style={{
            transform: `translate3D(${x}px, ${y}px, 0)`,
          }}
        >
          <Header onMouseDown={handleDragStart}>
            <span>{title}</span>
            <Button onClick={onClose}>
              <CloseIcon />
            </Button>
          </Header>
          <WindowContent>{children}</WindowContent>
        </Container>
      )}
    </>
  );
}

export default AppWindow;
