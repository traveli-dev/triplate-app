export type Styles = {
  default: string
  focus: string
  nav: string
  wrapper: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
