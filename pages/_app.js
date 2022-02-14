import { SWRConfig } from 'swr';
import { fetcher } from '../utils';
import { ThemeProvider, GlobalStyle } from '../theme';

const App = ({ Component, pageProps }) => (
  <SWRConfig
    value={{ fetcher, revalidateOnMount: false, revalidateOnFocus: false }}
  >
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </SWRConfig>
);

export default App;
