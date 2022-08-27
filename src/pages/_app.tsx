import type { AppProps } from 'next/app'
import ResetStyle from '../styles/ResetStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <ResetStyle />
    </Component>
  )
}

export default MyApp
