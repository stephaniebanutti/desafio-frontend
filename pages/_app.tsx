import { globalStyles, body } from '../styles/global';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  body();
  return <Component {...pageProps} />
}

export default MyApp
