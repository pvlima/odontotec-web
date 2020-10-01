import styled, { css } from 'styled-components';

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

  position: relative;
`;

export const Mobile = styled.button`
  display: none;
  margin-left: auto;
  background-color: transparent;
  border: 0;
  color: var(--color-normal);

  > svg {
    margin-left: 8px;
  }

  @media (max-width: 675px) {
    display: flex;
    align-items: center;
  }
`;

const cssMenuDesktop = css`
  margin-left: auto;

  > li + li {
    margin-left: 16px;
  }

  .dropdown {
    cursor: pointer;
    position: relative;

    &:hover .dropdown-content {
      display: block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      right: 0;
      width: 150px;
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
      border-radius: 8px;

      li {
        list-style: none;
        padding: 12px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        button {
          border: 0;
          background-color: transparent;
          color: var(--color-text);
        }
      }
    }
  }

  .dropdown > span::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
`;

const cssMenuMobile = css`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 32px;

  width: 200px;
  z-index: 1;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);

  &.show {
    display: flex;
  }

  > li + li {
    margin-left: 0;
  }

  li {
    list-style: none;
    padding: 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

export const Menu = styled.ul`
  display: flex;

  > li {
    list-style: none;

    a {
      color: var(--color-normal);
      text-decoration: none;
    }

    &.active a {
      color: var(--color-primary);
      font-weight: 500;
    }
  }

  ${cssMenuDesktop}

  @media (max-width: 675px) {
    ${cssMenuMobile}
  }
`;
