import React, { ButtonHTMLAttributes } from 'react'
import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

type ButtonFillProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  //TODO: icon
}

export const ButtonFill = ({ children, ...props }: ButtonFillProps) => {
  return (
    <button css={styles.button} {...props}>
      {children}
    </button>
  )
}

const styles = {
  button: css`
    color: ${theme.color.white};
    background-color: ${theme.color.blue};
    width: 100%;
    height: 56px;
    font-weight: 600;
    font-size: ${theme.fontSize.md};
    border-radius: 100px;
    border: 0;
    cursor: pointer;
    transition: transform 0.1s;
    /*波紋の基点とするためrelativeを指定*/
    position: relative;
    /*はみ出す波紋を隠す*/
    overflow: hidden;

    &:hover {
      background-color: ${theme.color.hoverBlue};
    }

    &::after {
      content: '';
      /*波紋*/
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: radial-gradient(circle, #fff 10%, transparent 10%) no-repeat
        50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform 0.3s, opacity 1s;
    }

    &:active::after {
      transform: scale(0, 0);
      transition: 0s;
      opacity: 0.3;
    }

    ${mq('sm')} {
      &:active {
        transform: scale(0.95);
      }
    }
  `
}
