import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { theme as defaultTheme } from "@chakra-ui/theme"
import { defaultFont } from './fonts';

const productionTheme = {
  ...defaultTheme,
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",

    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
  
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
  
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
  
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
  },
};

const theme = extendTheme({
  colors: {
    acmeRed: '#B32C36',
  },
  config: {
    initialColorMode: 'dark',
    cssVarPrefix: 'acme',
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
}, productionTheme);

export default theme;