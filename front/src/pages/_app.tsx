import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { Global } from '@emotion/react'
import { CheckAuth } from '@/components/Auths'
import { ErrorBoundary } from '@/components/Errors'
import { Layout } from '@/components/Layouts'
import { SEO } from '@/config/next-seo.config'
import { store } from '@/redux/rootStore'
import { globalStyle } from '@/styles/globalStyle'
import '@/lib/firebase'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Global styles={globalStyle} />
      <DefaultSeo {...SEO} />
      <Layout>
        <ErrorBoundary>
          <CheckAuth>
            <Component {...pageProps} />
          </CheckAuth>
        </ErrorBoundary>
      </Layout>
    </Provider>
  )
}

// router.queryの初回undefinedを消す
App.getInitialProps = async () => ({ pageProps: {} })

export default App
