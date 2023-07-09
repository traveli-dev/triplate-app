import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  button: (isFit: boolean) => css`
    flex-grow: ${isFit ? 0 : 1};
    padding: 8px;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.black};
    text-align: center;
    background-color: ${theme.renewalColor.lightGray};
    border: 0;
    border-radius: 100px; /* ボタンをflexで横並びさせたときに、要素が自動的に伸びるように */
    & span[id='bold'] {
      font-weight: 600;
    }
    &:hover {
      background-color: ${theme.renewalColor.hoverGray};
      ${mq('sm')} {
        background-color: ${theme.renewalColor.lightGray};
      }
    }
  `,
  icon: css`
    margin-right: 8px;
  `,
  labelWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
  `
}
