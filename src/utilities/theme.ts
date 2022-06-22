import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  components: {
    Switch: {
      baseStyle: {
        track: {
          bb: 'gray.300',
        },
      },
    },
  },
});

export default theme;
