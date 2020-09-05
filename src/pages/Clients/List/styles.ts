import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px;
  overflow-x: auto;

  @media (max-width: 675px) {
    padding: 16px;
  }

  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .text-nowrap {
    white-space: nowrap !important;
  }

  table {
    margin-top: 32px;
    width: 100%;
    margin-bottom: 1rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.16);

    thead th {
      vertical-align: center;
      padding: 16px;
      text-align: left;
    }

    tbody td {
      vertical-align: center;
      padding: 16px;
      text-align: left;
    }

    tbody tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    padding: 12px 24px;
    background-color: var(--color-primary);
    border-radius: 8px;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-primary-shade);
    }
  }
`;

export const SearchClient = styled.div`
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
