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
  toastBgGreen: '#F4FFFE',
  toastGreen: '#01C0B2',
  toastBgRed: '#FCE7E7',
  toastRed: '#CC1818'
} as const

const renewalColorPallet = {
  white: '#ffffff',
  black: '#0f141a',
  black800: '#262C34',
  gray: '#595959',
  gray300: '#e1e1e1',
  gray200: '#f2f2f2',
  gray100: '#f9f8f8',
  blue: '#4272ef',
  red: '#cc1818',
  red200: '#FCE7E7',
  pink: '#f3377e',
  green: '#01C0B2',
  green200: '#F4FFFE'
} as const

const renewalColor = {
  // primary colors
  white: renewalColorPallet.white,
  black: renewalColorPallet.black,
  gray: renewalColorPallet.gray,
  red: renewalColorPallet.red,
  blue: renewalColorPallet.blue,
  pink: renewalColorPallet.pink,

  // hover
  hoverBlack: renewalColorPallet.black800,
  hoverGray: renewalColorPallet.gray100,

  // background
  bgGray: renewalColorPallet.gray100,
  bgFormGray: renewalColorPallet.gray200,

  // disabled
  disabledGray: renewalColorPallet.gray300,

  // border
  borderGray: renewalColorPallet.gray300,

  // shadow
  shadowGray: 'box-shadow(0.4rem 0.4rem 1rem #e4ebee)',

  // toast
  toastGreen: renewalColorPallet.green,
  toastBgGreen: renewalColorPallet.green200,
  toastRed: renewalColorPallet.red,
  toastBgRed: renewalColorPallet.red200
}

const fontSize = {
  xs: '1.2rem',
  sm: '1.4rem',
  md: '1.6rem',
  lg: '2.0rem',
  xl: '2.4rem'
} as const

const breakpoint = {
  // xs: '27rem',
  // sm: '32rem',
  // md: '68rem'
  xs: '320px',
  sm: '425px',
  md: '768px'
} as const

export const theme = {
  color,
  renewalColor,
  fontSize,
  breakpoint
} as const
