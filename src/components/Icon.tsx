import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  icon: string;
  name: string;
  handleDoubleClick: () => void;
}

const Container = styled.button`
  width: 60px;
  padding: 5px 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: 1px dashed #aaa;
  }
`;

const IconImage = styled.img`
  display: block;
  width: 40px;
  margin: 0 auto 5px;
`;

const Text = styled.div`
  color: #fff;
  font-size: 13px;
  text-align: center;
`;

function Icon({ icon, name, handleDoubleClick }: Props): ReactElement {
  return (
    <Container type="button" onDoubleClick={handleDoubleClick}>
      <IconImage src={icon} />
      <Text>{name}</Text>
    </Container>
  );
}

export default Icon;
