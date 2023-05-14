import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { Global } from '@emotion/react'
import { CheckAuth } from '@/components/Auths'
import { Layout } from '@/components/Layouts'
import { SEO } from '@/config/next-seo.config'
import { store } from '@/redux/rootStore'
import { globalStyle } from '@/styles/globalStyle'
import '@/styles/lib/googleMap.css'
import '@/lib/firebase'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Global styles={globalStyle} />
      <DefaultSeo {...SEO} />
      <Layout>
        <CheckAuth>
          <Component {...pageProps} />
        </CheckAuth>
      </Layout>
    </Provider>
  )
}

export default App
