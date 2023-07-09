import React from 'react'
import { styles } from '@/styles/components/Containers/Container.styles'

export type ContainerProps = {
  bgColor: 'white' | 'blue' | 'none'
  isFull?: boolean
  isCenter?: boolean
  isPaddingNone?: boolean
  children: React.ReactNode
}

export const Container = ({
  bgColor,
  children,
  ...options
}: ContainerProps) => {
  return <div css={styles.container({ bgColor, ...options })}>{children}</div>
}
