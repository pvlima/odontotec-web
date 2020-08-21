import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 16px 12px;
  border-radius: 8px;

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 12px;
    color: var(--color-secondary);
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
