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

export const ClientRecordsSection = styled.section`
  margin-top: 32px;
`;

export const ClientRecordsContent = styled.div`
  margin-top: 16px;

  .input-control {
    display: flex;
    align-items: center;

    & + div {
      margin-top: 8px;
    }

    div + div {
      margin-left: 12px;
      flex: 1;
    }

    .button_remove_record {
      border: 0;
      margin-left: 12px;
      color: var(--color-error);
    }
  }

  .button_add {
    border: 0;
    background-color: var(--color-success);
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
    border-radius: 8px;
  }
`;
