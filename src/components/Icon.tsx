import React from 'react';
import styled from 'styled-components';

interface Props {
  icon: string;
  name: string;
  handleDoubleClick: () => void;
}

const Container = styled.div`
  width: 40px;
  padding: 10px;
  text-align: center;
`;

const IconImage = styled.img`
  display: block;
  width: 100%;
`;

const Text = styled.div`
  margin-top: 5px;
  color: #fff;
  font-size: 13px;
`;

function Icon({ icon, name, handleDoubleClick }: Props) {
  return (
    <Container onDoubleClick={handleDoubleClick}>
      <IconImage src={icon} />
      <Text>{name}</Text>
    </Container>
  );
}

export default Icon;
