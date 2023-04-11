export type Styles = {
  bg_blue: string
  bg_white: string
  container: string
  min_height: string
  text_align: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
