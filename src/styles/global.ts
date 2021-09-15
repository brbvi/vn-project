import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root{
    --body: #F6FAFF;
    --green-top: #85c226;
    --green-bottom: #00923f;
    --brown: #854b3f;
  }

  body{
    background: var(---body);
  }

  button, input {
    background: 0;
    border: 0;
    cursor: pointer;
  }
`
