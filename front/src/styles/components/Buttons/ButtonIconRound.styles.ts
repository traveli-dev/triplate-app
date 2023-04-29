import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { buttonAnimation } from '@/styles/utils'

export const styles = {
  button: css`
    ${buttonAnimation({ scale: 0.8, transition: '0.3s' })}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: ${theme.color.white};
    filter: drop-shadow(0 0 0.8px rgba(101, 119, 134, 0.2));
    border-radius: 100px;
    box-shadow: 0 1px 3px 1px rgba(101, 119, 134, 0.25);
  `
}
