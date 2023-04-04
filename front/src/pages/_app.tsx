import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { globalStyle } from '@/styles/globalStyle'
import { Layout } from '@/components/Layouts'
import { DefaultSeo } from 'next-seo'
import { SEO } from '@/config/next-seo.config'
import '@/lib/firebase'
import 'normalize.css'
import '@/styles/global.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Global styles={globalStyle} />
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
