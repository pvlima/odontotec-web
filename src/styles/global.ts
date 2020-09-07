import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-normal);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  :root {
    --color-bg: #f2f5f9;
    --color-bg-info: #ebf8ff;
    --color-bg-success: #e6fffa;
    --color-bg-error: #fddede;

    --color-normal: #7E93B6;
    --color-primary: #00628F;
    --color-primary-shade: #004e72;
    --color-secondary: #A8B8D4;
    --color-info: #3172b7;
    --color-success: #2e656a;
    --color-error: #c53030;
  }
`;
