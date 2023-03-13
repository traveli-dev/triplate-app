import type { AppProps } from 'next/app'
import 'normalize.css'
import '@/styles/global.scss'
import '@/lib/firebase'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
