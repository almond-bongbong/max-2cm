import React, { ReactElement } from 'react';
import { Button, Divider } from 'react95';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  padding: 0 15px;
`;

const DividerLine = styled(Divider)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
`;

function TaskList(): ReactElement {
  return (
    <Container>
      <DividerLine vertical />
      <Button active>computer</Button>
    </Container>
  );
}

export default TaskList;
