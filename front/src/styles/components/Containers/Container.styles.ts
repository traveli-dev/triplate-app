import { css } from '@emotion/react'
import { ContainerProps } from '@/components/Containers'
import { theme } from '@/styles/theme'

type ContainerStyleType = Omit<ContainerProps, 'children'>
type BgColorType = Pick<ContainerStyleType, 'bgColor'>

const setBgColor = ({ bgColor }: BgColorType) => {
  if (bgColor === 'white') return theme.color.white
  else if (bgColor === 'blue') return theme.color.bgBlue
  else if (bgColor === 'none') return 'transparent'
}

export const styles = {
  container: ({
    bgColor,
    isFull,
    isCenter,
    isPaddingNone
  }: Omit<ContainerProps, 'children'>) => css`
    min-height: ${isFull ? 'calc(100vh - 112px)' : 'auto'};
    padding: 0 ${isPaddingNone ? '0' : '16px'};
    overflow: hidden;
    text-align: ${isCenter ? 'center' : 'start'};
    background-color: ${setBgColor({ bgColor })};
  `
}
