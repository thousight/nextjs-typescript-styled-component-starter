import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps): any => (
  <Component {...pageProps} />
)

export default MyApp
