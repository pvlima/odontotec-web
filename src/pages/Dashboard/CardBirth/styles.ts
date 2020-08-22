import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.16);

  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 16px;
      margin-bottom: 8px;
    }

    span {
      font-size: 14px;
    }
  }

  svg {
    margin-right: 8px;
    color: var(--color-secondary);
  }
`;
