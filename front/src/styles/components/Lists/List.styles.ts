import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  listWrapper: (border: boolean) => css`
    padding: 0;
    list-style: none;
    margin: 0;
    & li + li {
      border-top: ${border ? '1px' : '0px'} solid
        ${theme.renewalColor.borderGray};
    }
  `
}
