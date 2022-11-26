import { body, globalStyles } from '../styles/global';

function MyApp({ Component, pageProps }) {
  globalStyles();
  body();
  return <Component {...pageProps} />
}

export default MyApp
