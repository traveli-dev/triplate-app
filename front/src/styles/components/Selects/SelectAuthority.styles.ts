import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  wrapper: css`
    position: relative;
    display: inline-block;
    vertical-align: middle;

    select {
      width: 120px;
      padding: 8px 16px;
      font-size: ${theme.fontSize.md};
      text-overflow: ellipsis;
      cursor: pointer;
      background: #fff;
      border: 2px solid ${theme.color.bgGray};
      border-radius: 100px;
      &:hover,
      &:focus {
        background-color: ${theme.color.bgGray};
        ${mq('sm')} {
          background-color: ${theme.color.white};
        }
      }
    }
    &::before {
      position: absolute;
      top: 50%;
      right: 16px;
      width: 10px;
      height: 10px;
      margin-top: -7px;
      content: '';
      border: 0;
      border-right: solid 2px ${theme.color.gray};
      border-bottom: solid 2px ${theme.color.gray};
      transform: rotate(45deg);
    }
  `
}
