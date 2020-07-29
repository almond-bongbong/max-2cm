import React, {
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CloseIcon } from 'assets/styles/Icons';
import { Button, Window, WindowContent, WindowHeader } from 'react95';
import { RootState } from 'store/modules';
import taskSlice from 'store/modules/task';

const Container = styled(Window)`
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 800px;

  &:focus {
    outline: 0;
  }
`;

const Header = styled(WindowHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    user-select: none;
  }
`;

interface Props {
  run: boolean;
  name: string;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

function AppWindow({ run, name, title, children, onClose }: Props): ReactElement {
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const startPosition = useRef([0, 0]);
  const [[x, y], setPosition] = useState([0, 0]);
  const taskList = useSelector((state: RootState) => state.task.taskList);
  const currentTask = taskList.find((t) => t.name === name);

  const toggleTaskActive = useCallback(
    (active: boolean) => {
      dispatch(taskSlice.actions.toggleActive({ name, active }));
    },
    [dispatch, name]
  );

  useEffect(() => {
    if (run) toggleTaskActive(true);
  }, [run, toggleTaskActive]);

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

  const handleFocus = useCallback(() => {
    toggleTaskActive(true);
  }, [toggleTaskActive]);

  const handleBlur = useCallback(() => {
    toggleTaskActive(false);
  }, [toggleTaskActive]);

  return (
    <>
      {run && (
        <Container
          ref={containerRef}
          tabIndex={1}
          className="window"
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            transform: `translate3D(${x}px, ${y}px, 0)`,
          }}
        >
          <Header active={currentTask?.active} onMouseDown={handleDragStart}>
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
