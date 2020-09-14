import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;

  margin: 0 auto;
  padding: 32px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;

    button {
      border: 0;
      display: flex;
      align-items: center;
    }

    .goBack {
      background-color: transparent;

      margin-right: 16px;
      color: var(--color-primary);

      svg {
        margin-right: 4px;
      }
    }

    .delete {
      padding: 12px;
      border-radius: 8px;
      background-color: var(--color-error);
      color: #fff;
    }
  }
`;
