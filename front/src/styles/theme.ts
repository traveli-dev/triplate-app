const color = {
  black: '#0f141a',
  gray: '#595959',
  white: '#ffffff',
  blue: '#4272ef',
  pink: '#f3377e',
  hoverBlue: '#5a88ff',
  hoverPink: '#f15d96',
  bgGray: '#f2f2f2',
  bgBlue: '#eaf0ff',
  outlineGray: '#e1e1e1',
  shadowGray: 'box-shadow(0.4rem 0.4rem 1rem #e4ebee)'
} as const

const fontSize = {
  sm: '1.2rem',
  md: '1.6rem',
  lg: '2.0rem',
  xl: '2.4rem'
} as const

export const theme = {
  color,
  fontSize
} as const
