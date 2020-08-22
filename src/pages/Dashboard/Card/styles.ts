import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 292px;
  height: 148px;
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
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-secondary);

  svg {
    margin-right: 12px;
  }

  strong {
    color: var(--color-secondary);
    font-size: 18px;
  }
`;
