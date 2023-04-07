import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="ja">
    <Head>
      <link href="/manifest.json" rel="manifest" />
      <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
      <meta content="#fff" name="theme-color" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
