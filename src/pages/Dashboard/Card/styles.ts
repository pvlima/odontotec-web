import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  max-width: 292px;
  max-height: 148px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.16);

  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  h1 {
    font-size: 48px;
  }

  span {
    position: absolute;
    top: 24px;
    right: 24px;
    color: var(--color-secondary);
  }

  @media (max-width: 675px) {
    padding: 12px;

    h1 {
      font-size: 32px;
    }
  }

  @media (max-width: 415px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-secondary);

  svg {
    font-size: 24px;
    margin-right: 12px;
    flex-shrink: 0;
  }

  strong {
    color: var(--color-secondary);
    font-size: 18px;
  }

  @media (max-width: 675px) {
    font-size: 16px;

    svg {
      font-size: 20px;
    }
  }

  @media (max-width: 415px) {
    h1 {
      font-size: 24px;
    }
    strong {
      font-size: 14px;
    }
  }
`;
