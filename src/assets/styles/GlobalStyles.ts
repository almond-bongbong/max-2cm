import { createGlobalStyle } from 'styled-components';
import { styleReset } from 'react95';
import msSansSerif from 'react95/dist/fonts/ms_sans_serif.woff2';
import msSansSerifBold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const BASIC_FONT = `'ms_sans_serif'`;

export default createGlobalStyle`
  ${styleReset}
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${msSansSerif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${msSansSerifBold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  
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
