const color = {
  black: '#0f141a',
  gray: '#595959',
  red: '#CC1818',
  white: '#ffffff',
  blue: '#4272ef',
  pink: '#f3377e',
  hoverBlue: '#5a88ff',
  hoverBlack: '#262C34',
  hoverPink: '#f15d96',
  bgGray: '#f2f2f2',
  gray100: '#f9f8f8',
  gray700: '#787878',
  bgBlue: '#eaf0ff',
  outlineGray: '#e1e1e1',
  shadowGray: 'box-shadow(0.4rem 0.4rem 1rem #e4ebee)',
  toastBgGreen:'#F4FFFE',
  toastGreen:'#01C0B2',
  toastBgRed:'#FCE7E7',
  toastRed:'#CC1818'
} as const

const fontSize = {
  xs: '1.2rem',
  sm: '1.4rem',
  md: '1.6rem',
  lg: '2.0rem',
  xl: '2.4rem'
} as const

const breakpoint = {
  xs: '27rem',
  sm: '32rem',
  md: '68rem'
} as const

export const theme = {
  color,
  fontSize,
  breakpoint
} as const
