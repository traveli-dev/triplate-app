import { css } from '@emotion/react'
import { AvatarWithTextProps } from '@/components/Avatars'
import { theme } from '@/styles/theme'

type Optional = 'url' | 'name' | 'avatarSize'
type FontSizeStyleType = Omit<AvatarWithTextProps, Optional>

const setFontSize = ({ fontSize }: FontSizeStyleType) => {
  if (fontSize === 'sm') return theme.fontSize.sm
  else if (fontSize === 'md') return theme.fontSize.md
}

export const styles = {
  wrapper: css`
    display: flex;
  `,
  layoutAvatar: css`
    margin-right: 16px;
  `,
  text: ({ fontSize }: FontSizeStyleType) => css`
    margin: auto 0;
    font-size: ${setFontSize({ fontSize })};
  `
}
