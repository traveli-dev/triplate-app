import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  wrapper: css`
    display: inline-block;
    position: relative;
    vertical-align: middle;

    select {
      font-size: ${theme.fontSize.md};
      appearance: none;
      width: 120px;
      padding: 8px 16px;
      border: 2px solid ${theme.color.bgGray};
      outline: 0;
      border-radius: 100px;
      background: #fff;
      box-shadow: none;
      text-overflow: ellipsis;
      cursor: pointer;
      &:hover {
        background-color: ${theme.color.bgGray};
        ${mq('sm')}{
        background-color: ${theme.color.white};

        }
      }
    }
    &::before {
      position: absolute;
      top: 50%;
      right: 16px;
      margin-top: -7px;
      content: '';
      width: 10px;
      height: 10px;
      border: 0;
      border-bottom: solid 2px ${theme.color.gray};
      border-right: solid 2px ${theme.color.gray};
      transform: rotate(45deg);
    }
  `
}
