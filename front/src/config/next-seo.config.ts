import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | traveli - URLを保存する旅程管理アプリ',
  defaultTitle: 'traveli - URLを保存する旅程管理アプリ',
  description:
    'traveliは旅先で確認したい情報のURLを1つにまとめて友達や家族に共有できるwebアプリです',
  openGraph: {
    type: 'website',
    title: 'traveli - URLを保存する旅程管理アプリ',
    description:
      'traveliは旅先で確認したい情報のURLを1つにまとめて友達や家族に共有できるwebアプリです',
    site_name: 'traveli - URLを保存する旅程管理アプリ',
    url: 'https://traveli.app/',
    images: [
      {
        url: 'https://traveli.app/images/ogp.png',
        width: 1200,
        height: 630,
        alt: '',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    handle: '@traveli_jp',
    site: '@traveli_jp',
    cardType: 'summary_large_image'
  }
}
