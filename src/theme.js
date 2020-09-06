import { extendTheme } from '@chakra-ui/core';

const _focus = {
  boxShadow: '0 0 3px 1px #ed8936 ',
};

const theme = extendTheme({
  colors: {
    primary: '#ed8936',
  },
  fonts: {
    body: 'Quicksand',
    heading: 'Quicksand',
  },
  sizes:{
    "5xl": "62em"
  },
  components: {
    Link: {
      baseStyle: {
        color: 'primary',
        _hover: {
          color: 'gray.800',
        },
        _focus,
      },
    },
    Button: {
      baseStyle: {
        _focus,
      },
    },
  },
});

export default theme;
