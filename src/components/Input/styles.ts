import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 16px 12px;
  background: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.16);
  color: var(--color-secondary);

  ${props =>
    props.isFocused &&
    css`
      color: var(--color-primary);
      border-color: var(--color-primary);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--color-primary);
    `}

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 12px;
  }

  input {
    flex: 1;
    border: 0;
    color: var(--color-normal);

    &::placeholder {
      color: var(--color-secondary);
      font-style: italic;
    }
  }
`;

export const ErrorMessage = styled.p`
  text-align: left;
  margin-top: 8px;
  margin-bottom: 16px;
  color: var(--color-error);
`;
