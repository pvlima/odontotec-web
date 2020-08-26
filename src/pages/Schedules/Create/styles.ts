import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  label {
    display: flex;
    flex-direction: column;

    & + label {
      margin-top: 16px;
    }

    span {
      margin-bottom: 8px;
    }
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;

  select {
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
  }

  input {
    background-color: #fff;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  margin-left: 32px;
`;

export const ListUsers = styled.div`
  margin-top: 16px;
`;

export const User = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.16);

  input {
    margin-right: 12px;
  }
`;
