import { createGlobalStyle } from 'styled-components';
import { styleReset } from 'react95';

export default createGlobalStyle`
  ${styleReset}
  
  body {
    overflow: hidden;
    width: 100vh;
    height: 100vh;
    background-color: rgb(85, 170, 170);
  }
`;
