import React, { ReactElement } from 'react';
import { AppBar, Avatar, Toolbar } from 'react95';
import styled from 'styled-components';
import moment from 'moment';
import Menu from '../Menu';

const Container = styled(AppBar)`
  position: absolute;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
`;

const TimeSquare = styled(Avatar)`
  width: 80px;
  font-size: 14px;
`;

function TaskBar(): ReactElement {
  return (
    <Container>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Menu />
        <TimeSquare square>{moment().format('HH:mm A')}</TimeSquare>
      </Toolbar>
    </Container>
  );
}

export default TaskBar;
