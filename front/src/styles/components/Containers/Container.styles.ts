import { css } from '@emotion/react'
import { ContainerProps } from '@/components/Containers'
import { theme } from '@/styles/theme'

export const styles = {
  container: ({
    bgColor,
    isFull,
    isCenter
  }: Omit<ContainerProps, 'children'>) => css`
    min-height: ${isFull ? 'calc(100vh - 56px)' : 'auto'};
    padding: 0 16px;
    text-align: ${isCenter ? 'center' : 'start'};
    background-color: ${bgColor === 'white' && theme.color.white}${bgColor ===
        'blue' && theme.color.bgBlue}${bgColor === 'none' && 'none'};
  `
}
