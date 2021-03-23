import * as React from 'react';
import { Global } from '@emotion/react';

export const defaultFont = `'Space Grotesk', 'Circular', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
'localhost', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`;

export const Circular = () => (
  <Global
    styles={`
    @font-face {
      font-family: Circular;
      src: url("../fonts/circular-light.woff2") format("woff2"), url("../fonts/circular-light.woff") format("woff");
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-family: Circular;
      src: url("../fonts/circular-book.woff2") format("woff2"), url("../fonts/circular-book.woff") format("woff");
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: Circular;
      src: url("../fonts/circular-medium.woff2") format("woff2"), url("../fonts/circular-medium.woff") format("woff");
      font-weight: 500;
      font-style: normal;
    }
    @font-face {
      font-family: Circular;
      src: url("../fonts/circular-bold.woff2") format("woff2"), url("../fonts/circular-bold.woff") format("woff");
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: Circular;
      src: url("../fonts/circular-black.woff2") format("woff2"), url("../fonts/circular-black.woff") format("woff");
      font-weight: 900;
      font-style: normal;
    }
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    `}
  />
);

export const SpaceGrotesk = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Space Grotesk';
      src: url("../fonts/SpaceGrotesk[wght].woff2") format("woff2");
      font-style: normal;
    }
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    `}
  />
);

export const Inter = () => (
  <Global
    styles={`
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhGq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhPq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhIq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhEq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhFq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhLq3-cXbKD.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhGq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhPq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhIq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhEq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhFq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhLq3-cXbKD.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhGq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhPq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhIq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhEq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhFq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhLq3-cXbKD.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhGq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhPq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhIq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhEq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhFq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhLq3-cXbKD.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhGq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhPq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhIq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhEq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhFq3-cXbKDO1w.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0x5DF4xlVMF-BfR8bXMIjhLq3-cXbKD.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    `}
  />
);