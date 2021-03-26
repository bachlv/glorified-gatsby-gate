import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { defaultFont } from './fonts';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  fonts: {
    heading: defaultFont,
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: defaultFont,
        color: mode('black', 'whiteAlpha.900')(props),
        bg: mode('white', 'black')(props),
        lineHeight: 'base',
      },
      nav: {
        color: mode('black', 'whiteAlpha.900')(props),
        fill: mode('white', 'whiteAlpha.900')(props),
        bg: mode('white', 'whiteAlpha.100')(props),
      },
    }),
  },
  components: {
    Button: {
      variants: {
        bp: (props) => ({
          color: mode('whiteAlpha.900', 'black')(props),
          bg: mode('black', 'whiteAlpha.900')(props),
          _hover: {
            bg: mode('blackAlpha.800', 'whiteAlpha.800')(props),
            _disabled: {
              bg: mode('black', 'white')(props),
            },
          },
          _active: {
            bg: mode('black', 'white')(props),
          },
          _focus: {
            boxShadow: mode('0 0 0 0.2rem rgba(0,0,0,0.2)', '0 0 0 0.2rem rgba(255,255,255,0.3)')(props),
          },
        }),
        bo: (props) => ({
          _hover: {
            boxShadow: mode('0 0 0 0.2rem rgba(0,0,0,0.2)', '0 0 0 0.2rem rgba(255,255,255,0.3)')(props),
          },
          _active: {
            boxShadow: mode('0 0 0 0.2rem black', '0 0 0 0.2rem rgba(255,255,255,0.3)')(props),
          },
          _focus: {
            boxShadow: 'none',
          },
        }),
      },
    },
  },
});

export default theme