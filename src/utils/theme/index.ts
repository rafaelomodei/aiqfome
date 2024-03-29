import { extendTheme } from '@chakra-ui/react';

export const extendThemeChakraUI = extendTheme({
  fonts: {
    body: 'Nunito, sans-serif',
    heading: 'Nunito, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        color: '#6D6F73',
      },
    },
  },
});

export const theme = {
  colors: {
    primary: '#7B1FA2',
    secondary: '#580F78',
    tertiary: '#00A296',
    background: '#EEF0F5',
    price: '#02A117',
    title: '#202326',
    titleSecondary: '#393A3C',
    gray: '#6D6F73',
  },
};
