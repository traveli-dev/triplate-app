import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    width: 80px;
    padding: 10px 0;
    font-size: ${theme.fontSize.xs};
    text-align: center;
    text-decoration: none;
    background-color: ${theme.color.white};
    :hover,
    :focus {
      color: ${theme.color.blue};
    }
    p {
      margin: 12px 0;
    }
  `,
  lines: css`
    display: table;
    width: 100%;
    /* フォントサイズとともに高さが変わるため */
    height: 3.6rem;
    margin: 4px 0 0 0;
    & > p {
      display: table-cell;
      vertical-align: middle;
    }
  `
}
