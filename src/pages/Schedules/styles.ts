import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 32px;
  margin: 0 auto;
  height: 100vh;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    > h3 {
      margin-bottom: 12px;
    }
  }

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

export const Content = styled.div`
  margin: 32px 0;
  display: flex;
  justify-content: space-between;
`;

export const Appointments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 475px;

  .morning,
  .afternoon {
    margin-top: 32px;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--color-secondary);
  }
`;

export const NextAppointment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 8px;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 80%;
    width: 2px;
    left: 0%;
    top: 10%;
    background-color: var(--color-primary);
  }

  p {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 16px;
    }
    span {
      font-size: 14px;
      margin-top: 8px;
    }
  }

  div {
    display: flex;
    align-items: center;

    svg {
      color: var(--color-primary);
      margin-right: 8px;
    }
  }
`;

export const Schedule = styled.div`
  display: flex;

  & + div {
    margin-top: 8px;
  }

  span {
    display: flex;
    align-items: center;
    margin-right: 16px;

    svg {
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.16);

    strong {
      font-size: 16px;
    }

    span {
      font-size: 14px;
      margin-top: 8px;
    }
  }
`;

export const Calendar = styled.div`
  width: 310px;
  height: 310px;
  background-color: #fff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
