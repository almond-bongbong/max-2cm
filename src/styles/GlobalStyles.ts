import { createGlobalStyle } from 'styled-components';
import { styleReset } from 'react95';

const BASIC_FONT = `'IBM Plex Mono', monospace`;

export default createGlobalStyle`
  ${styleReset}
  
  body {
    overflow: hidden;
    width: 100vh;
    height: 100vh;
    background-color: teal;
    font-family: ${BASIC_FONT};
    letter-spacing: -0.5px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }
`;
