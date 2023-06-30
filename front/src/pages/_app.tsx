import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { Global } from '@emotion/react'
import { CheckAuth } from '@/components/Auths'
import { ErrorBoundary } from '@/components/Errors'
import { Layout } from '@/components/Layouts'
import { ToastProvider } from '@/components/Toasts'
import { SEO } from '@/config/next-seo.config'
import { store } from '@/redux/store'
import { globalStyle } from '@/styles/globalStyle'
import '@/lib/firebase'

const App = ({ Component, pageProps }: AppProps) => {
  // TODO: 暫定措置 認証修正する時に直す
  const router = useRouter()
  const isReady = router.isReady || router.pathname === '/auth'

  return (
    <Provider store={store}>
      <Global styles={globalStyle} />
      <DefaultSeo {...SEO} />
      <Layout>
        {isReady ? (
          <ErrorBoundary>
            <CheckAuth>
              <Component {...pageProps} />
            </CheckAuth>
          </ErrorBoundary>
        ) : (
          <>ローディング</>
        )}
        <ToastProvider />
      </Layout>
    </Provider>
  )
}

export default App
