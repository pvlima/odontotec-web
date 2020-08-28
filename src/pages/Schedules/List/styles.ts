import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 32px;
  margin: 0 auto;
  height: 100vh;

  @media (max-width: 675px) {
    padding: 24px;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    p {
      display: flex;
      align-items: center;
      color: var(--color-secondary);
      margin-top: 8px;

      span {
        display: flex;
        align-items: center;
        /* text-transform: capitalize; */
      }

      span + span::before {
        content: '';
        width: 1px;
        height: 12px;
        background-color: var(--color-secondary);
        margin: 0 8px;
      }
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

  @media (max-width: 415px) {
    flex-direction: column;
    align-items: flex-start;

    a {
      margin-top: 24px;
    }
  }
`;

export const Content = styled.div`
  margin: 32px 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 675px) {
    flex-direction: column;
  }
`;

export const Calendar = styled.aside`
  margin-bottom: 32px;
  @media (min-width: 675px) {
    margin-right: 32px;
  }

  .DayPicker {
    background: #fff;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.16);
  }

  .DayPicker-Caption {
    color: var(--color-primary);
  }

  .DayPicker-Weekday {
    color: var(--color-normal);
    font-weight: 500;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 32px;
    height: 32px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: var(--color-bg-info);
    border-radius: 8px;
    color: var(--color-primary);
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: #fff;
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: var(--color-secondary) !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: var(--color-primary) !important;
    border-radius: 8px;
    color: #fff !important;
  }
`;

export const Appointments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

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
