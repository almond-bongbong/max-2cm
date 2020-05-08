import React, { ReactElement } from 'react';
import { Button, Divider, List, ListItem } from 'react95';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const MenuList = styled(List)`
  z-index: 10;
  top: -12px;
`;

function Menu(): ReactElement {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

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
        Start
      </Button>
    </Container>
  );
}

export default Menu;
