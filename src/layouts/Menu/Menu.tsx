import React, { ReactElement } from 'react';
import { Button, Divider, List, ListItem } from 'react95';
import styled from 'styled-components';
import windowLogo from 'assets/images/common/windows-logo.png';

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const WindowImage = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const MenuList = styled(List)`
  z-index: 10;
  top: -12px;
`;

function Menu(): ReactElement {
  const [open, setOpen] = React.useState(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Container>
      {open && (
        <MenuList horizontalAlign="left" verticalAlign="top" open={open} onClick={handleClose}>
          <ListItem>‍Profile</ListItem>
          <ListItem>My account</ListItem>
          <Divider />
          <ListItem disabled>Logout</ListItem>
        </MenuList>
      )}
      <Button onClick={handleClick} active={open} style={{ fontWeight: 'bold' }}>
        <WindowImage src={windowLogo} alt="windows logo" />
        <span>Start</span>
      </Button>
    </Container>
  );
}

export default Menu;
