import type { AppProps } from 'next/app'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import 'normalize.css'
import '@/styles/global.scss'
import '@/lib/firebase'
import { Layout } from '@/components/Layouts'
import { DefaultSeo } from 'next-seo'
import SEO from '@/config/next-seo.config'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
