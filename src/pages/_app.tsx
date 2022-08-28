import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'
import ResetStyle from '../styles/ResetStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
