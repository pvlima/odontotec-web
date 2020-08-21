import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: var(--color-primary);
  border-radius: 8px;
  margin-top: 16px;
  padding: 16px;
  border: none;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary-shade);
  }
`;
