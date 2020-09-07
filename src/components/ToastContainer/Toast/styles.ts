import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type: 'error' | 'success' | 'info';
}

const toastTypesVariations = {
  error: css`
    background-color: var(--color-bg-error);
    color: var(--color-error);
  `,
  success: css`
    background-color: var(--color-bg-success);
    color: var(--color-success);
  `,
  info: css`
    background-color: var(--color-bg-info);
    color: var(--color-info);
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 300px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypesVariations[props.type]}

  > svg {
    margin: 4px 8px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 12px;
    opacity: 0.6;

    border: 0;
    background-color: transparent;
    color: inherit;
  }
`;
