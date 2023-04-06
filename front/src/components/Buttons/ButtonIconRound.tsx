import { css } from '@emotion/react'
import { HiOutlinePlus } from 'react-icons/hi'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const ButtonIconRound = () => {
  return (
    <button css={styles.button}>
      <HiOutlinePlus size={24} />
    </button>
  )
}

const styles = {
  button: css`
    width: 64px;
    height: 64px;
    border: 0;
    border-radius: 100px;
    background-color: ${theme.color.blue};
    color: ${theme.color.white};
    box-shadow: 0 1px 3px 1px rgba(101, 119, 134, 0.25);
    filter: drop-shadow(0 0 0.8px rgba(101, 119, 134, 0.2));
    cursor: pointer;
    /*波紋の基点とするためrelativeを指定*/
    position: relative;
    /*はみ出す波紋を隠す*/
    overflow: hidden;
    transition: transform 0.3s;

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
        transform: scale(0.8);
      }
    }
  `
}
