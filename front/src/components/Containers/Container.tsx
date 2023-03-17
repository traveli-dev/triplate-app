import React from 'react'
import styles from '@/styles/components/Containers/Container.module.scss'

type ContainerProps = {
  bgColor: 'white' | 'blue'
  isFull?: boolean
  isCenter?: boolean
  children: React.ReactNode
}

export const Container = ({
  bgColor,
  isFull,
  isCenter,
  children
}: ContainerProps) => {
  return (
    <div
      className={`${styles.container} ${
        bgColor === 'white' ? styles.bg_white : styles.bg_blue
      }
      ${isFull && styles.min_height} ${isCenter && styles.text_align}`}
    >
      {children}
    </div>
  )
}
