import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  button: css`
    padding: 8px;
    font-size: ${theme.fontSize.sm};
    font-weight: 300;
    color: ${theme.color.black};
    text-align: center;
    background-color: ${theme.color.bgGray};
    border: 0;
    border-radius: 100px;
    flex-grow: 1; // ボタンをflexで横並びさせたときに、要素が自動的に伸びるように
    & span[id='bold'] {
      font-weight: 600;
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
