import { ThemeProvider } from 'styled-components';

const color = {
  maul: '#e0004d',
  hyperspace: '#002b49',
  appo: '#0093b2',
  vader: '#000',
  greedo: '#2ad2c9',
  tatooine: '#f2cd00',
  droid: '#f7f7f6',
};

const breakpoint = {
  xxs: '640px',
  xs: '750px',
  sm: '828px',
  md: '1080px',
  lg: '1200px',
  xl: '1920px',
  xxl: '2048px',
  xxxl: '3840px',
};

const condition = Object.entries(breakpoint).reduce(
  (condition, [key, value]) => ({
    ...condition,
    [key]: `(min-width: ${value})`,
  }),
  {}
);

const theme = { color, breakpoint, condition };

const ThemeProviderContainer = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { ThemeProviderContainer as ThemeProvider };
