import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.16);

  display: flex;

  input {
    padding: 12px;
    border: 0;
    border-radius: 8px 0 0 8px;
    flex: 1;
  }

  button {
    color: #fff;
    min-width: 50px;
    border: 0;
    background-color: var(--color-primary);
    border-radius: 0 8px 8px 0;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
