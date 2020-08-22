import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface CardBirthProps {
  icon: React.ComponentType<IconBaseProps>;
  label: string;
}

const CardBirth: React.FC<CardBirthProps> = ({
  children,
  icon: Icon,
  label,
}) => {
  return (
    <Container>
      <div>
        <strong>{children}</strong>
        <span>{label}</span>
      </div>
      <Icon size={24} />
    </Container>
  );
};

export default CardBirth;
