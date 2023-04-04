import * as nextImage from 'next/image'
import { globalStyle } from ''
import { RouterContext } from 'next/dist/shared/lib/router-context'

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

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyle} />
      <Story />
    </>
  ),
];

const OriginalNextImage = nextImage.default

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} placeholder={undefined} unoptimized />
  )
})
