import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;

  margin: 0 auto;
  padding: 32px;

  > div {
    display: flex;
    align-items: center;

    button {
      background-color: transparent;
      border: 0;
      display: flex;
      align-items: center;
      margin-right: 16px;
      color: var(--color-primary);

      svg {
        margin-right: 4px;
      }
    }
  }

  form {
    margin-top: 32px;
  }
`;
