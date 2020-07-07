import React, { ReactElement, useEffect, useState } from 'react';
import { AppBar, Avatar, Toolbar } from 'react95';
import styled from 'styled-components';
import moment from 'moment';
import Menu from 'layouts/Menu';
import TaskList from 'layouts/TaskList';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';

const Container = styled(AppBar)`
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
`;

const TimeSquare = styled(Avatar)`
  width: 80px;
  font-size: 14px;
  justify-content: center;
`;

const Colon = styled.span`
  width: 7px;
  text-align: center;
`;

function TaskBar(): ReactElement {
  const [nowMoment, setNowMoment] = useState(moment());
  const { taskList } = useSelector((state: RootState) => state.task);

  useEffect(() => {
    const timer = setInterval(() => {
      setNowMoment(moment());
    }, 1000);

    return (): void => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Menu />
        <TaskList taskList={taskList} />
        <TimeSquare square>
          {nowMoment.format('HH')}
          <Colon>:</Colon>
          {nowMoment.format('mm A')}
        </TimeSquare>
      </Toolbar>
    </Container>
  );
}

export default TaskBar;
