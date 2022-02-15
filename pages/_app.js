import { SWRConfig } from 'swr';
import { fetcher } from '../utils';
import { ThemeProvider, GlobalStyle } from '../theme';

const App = ({ Component, pageProps }) => (
  <SWRConfig value={{ fetcher }}>
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </SWRConfig>
);

export default App;
