import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { Global } from '@emotion/react'
import { Layout } from '@/components/Layouts'
import { SEO } from '@/config/next-seo.config'
import { store } from '@/redux/store'
import { globalStyle } from '@/styles/globalStyle'
import '@/lib/firebase'

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
