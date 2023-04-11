export type Styles = {
  avatar_with_text_layout: string
  chip_tag_layout: string
  content: string
  day: string
  img: string
  img_wrapper: string
  title: string
  wrapper: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
