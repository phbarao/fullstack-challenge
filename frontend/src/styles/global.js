import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: #000;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
  }

  body, input, button {
    -webkit-font-smoothing: antialiased;
    font-family: 'Rubik', sans-serif;
  }

  a {
    text-decoration: none;
    color: #fff
  }

  li {
    list-style: none;
    border-bottom: 1px solid white;
    padding: 10px;
    
    &:last-child{
      margin-bottom: 10px;
    }
    
  }

  small {
    display: block;
    color: #ACF7C1
  }
`;
