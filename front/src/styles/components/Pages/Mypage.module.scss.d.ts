export type Styles = {
  content: string
  user: string
  wrapper: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
