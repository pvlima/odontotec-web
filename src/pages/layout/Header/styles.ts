import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 86px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 16px 32px;

  display: flex;
  align-items: center;
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 32px;

  span {
    color: var(--color-secondary);
    font-size: 14px;
    line-height: 16px;
  }

  strong {
    color: var(--color-primary);
    font-size: 16px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  margin-left: auto;

  li {
    list-style: none;

    & + li {
      margin-left: 16px;
    }

    a {
      color: var(--color-normal);
      text-decoration: none;
    }

    &.active a {
      color: var(--color-primary);
      font-weight: 500;
    }
  }
`;

export const City = styled.select`
  padding: 12px 24px;
  border: 2px solid var(--color-info);
  border-radius: 8px;
  margin-left: 32px;

  color: var(--color-primary);
`;
