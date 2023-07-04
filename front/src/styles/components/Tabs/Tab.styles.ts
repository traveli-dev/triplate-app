import { css } from '@emotion/react'

export const styles = {
  tab: css`
    border: none;
    background-color: #576066;
    border-radius: 8px 8px 0 0;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 12px;
    &[aria-selected='true'] {
      background-color: #ffffff;
    }
    &[aria-selected='false'] {
      &:hover {
        background-color: #ffffff;
        cursor: pointer;
      }
    }
  `
}
