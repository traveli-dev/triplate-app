import React from 'react'
import styles from '@/styles/components/Containers/Container.module.scss'

type ContainerProps = {
  bgColor: 'white' | 'blue' // background-colorを切り替える
  isFull?: boolean // ページ全体まで高さを伸ばす（設定しなければコンテンツの量で高さが決まる）
  isCenter?: boolean // 要素を全て中央揃えにする
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
