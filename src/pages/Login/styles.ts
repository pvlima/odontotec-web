import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 700px;

  img {
    margin-top: 80px;
  }

  form {
    margin-top: 64px;
    width: 340px;
    text-align: center;

    h3 {
      margin-bottom: 24px;
    }
  }
`;
