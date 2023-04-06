import React from 'react'
import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

type ContainerProps = {
  bgColor: 'white' | 'blue'
  isFull?: boolean
  isCenter?: boolean
  children: React.ReactNode
}

export const Container = ({
  bgColor,
  children,
  ...options
}: ContainerProps) => {
  return <div css={styles.container({ bgColor, ...options })}>{children}</div>
}

const styles = {
  container: ({
    bgColor,
    isFull,
    isCenter
  }: Omit<ContainerProps, 'children'>) => css`
    min-height: ${isFull ? 'calc(100vh - 56px)' : 'auto'};
    padding: 0 16px;
    text-align: ${isCenter ? 'center' : 'start'};
    background-color: ${bgColor === 'white'
      ? theme.color.white
      : theme.color.bgBlue};
  `
}
