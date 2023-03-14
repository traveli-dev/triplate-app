import type { AppProps } from 'next/app'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import 'normalize.css'
import '@/styles/global.scss'
import '@/lib/firebase'
import { Layout } from '@/components/Layouts'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
