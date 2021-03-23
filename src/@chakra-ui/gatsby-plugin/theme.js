import { extendTheme } from '@chakra-ui/react';

const defaultFont = `'Space Grotesk', 'Circular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
'localhost', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`;

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: defaultFont,
  },
});

export default theme