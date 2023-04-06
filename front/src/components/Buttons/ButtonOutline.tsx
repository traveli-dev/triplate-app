import React, { ButtonHTMLAttributes } from 'react'
import { css } from '@emotion/react'
import { HiOutlinePlus } from 'react-icons/hi'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

type ButtonOutlineProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  icon: 'plus' | 'none'
}

export const ButtonOutline = ({
  children,
  icon,
  ...props
}: ButtonOutlineProps) => {
  return (
    <button css={styles.button} {...props}>
      <div css={styles.labelWrapper}>
        {icon == 'plus' && <HiOutlinePlus size={24} />}
        {children}
      </div>
    </button>
  )
}

const styles = {
  button: css`
    color: ${theme.color.blue};
    background-color: ${theme.color.white};
    width: 100%;
    height: 56px;
    font-weight: 600;
    font-size: ${theme.fontSize.md};
    border-radius: 100px;
    border: 2px solid ${theme.color.blue};
    cursor: pointer;
    /*波紋の基点とするためrelativeを指定*/
    position: relative;
    /*はみ出す波紋を隠す*/
    overflow: hidden;
    transition: transform 0.1s;

    &:hover {
      background-color: ${theme.color.bgBlue};
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
  `,
  labelWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `
}
