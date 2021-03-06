import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px;

  @media (max-width: 675px) {
    padding: 24px;
  }
`;

export const Overview = styled.section`
  .content {
    margin-top: 32px;

    display: flex;
    justify-content: space-between;

    @media (max-width: 675px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
  }
`;

export const Birthdays = styled.section`
  margin-top: 32px;
  .label {
    display: flex;
    align-items: center;

    h3 {
      margin-right: 16px;
    }

    span {
      color: var(--color-secondary);
    }
  }
  .content {
    margin-top: 32px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    @media (max-width: 675px) {
      gap: 16px;
    }

    @media (max-width: 415px) {
      grid-template-columns: 1fr;
    }
  }
`;
