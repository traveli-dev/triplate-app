import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { buttonAnimation } from '@/styles/utils'

export const styles = {
  button: css`
    ${buttonAnimation({ scale: 0.95, transition: '0.1s' })}
    width: 100%;
    height: 56px;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    color: ${theme.color.white};
    background-color: ${theme.color.blue};
    border-radius: 100px;

    &:hover,
    &:focus {
      background-color: ${theme.color.hoverBlue};
    }
  `
}
