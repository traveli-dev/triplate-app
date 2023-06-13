import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { linkHoverAnimationBottom } from '@/styles/utils'

export const styles = {
  cancelButton: css`
    display: block;
    margin: 16px auto;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    color: ${theme.color.gray};
    &:hover,
    &:focus {
      color: ${theme.color.hoverBlack};
    }
    ${linkHoverAnimationBottom}
  `
}
