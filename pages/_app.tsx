import type { AppProps } from 'next/app'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): any => (
  <Component {...pageProps} />
)

export default MyApp
