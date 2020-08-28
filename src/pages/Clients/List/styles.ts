import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px;

  @media (max-width: 675px) {
    padding: 16px;
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
