import React, { ReactElement } from 'react';
import { Button, Divider } from 'react95';
import styled from 'styled-components';
import { Task } from 'types/task';

const Container = styled.div`
  flex: 1;
  padding: 0 7px;
`;

const DividerLine = styled(Divider)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 7px;
`;

const TaskItem = styled(Button)`
  vertical-align: middle;
`;

interface Props {
  taskList: Task[];
}

function TaskList({ taskList }: Props): ReactElement {
  return (
    <Container>
      <DividerLine vertical />
      {taskList.map((t) => (
        <TaskItem key={t.name} active={t.active}>
          {t.name}
        </TaskItem>
      ))}
    </Container>
  );
}

export default TaskList;
