import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container, Title } from './styles';

interface CardProps {
  icon: React.ComponentType<IconBaseProps>;
  title: string;
  label?: string;
}

const Card: React.FC<CardProps> = ({ children, icon: Icon, title, label }) => {
  return (
    <Container>
      <h1>{children}</h1>

      <Title>
        <Icon />
        <strong>{title}</strong>
      </Title>

      {label && <span>{label}</span>}
    </Container>
  );
};

export default Card;
