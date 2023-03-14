import * as nextImage from 'next/image'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import '@/styles/global.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

const OriginalNextImage = nextImage.default

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} placeholder={undefined} unoptimized />
  )
})
