import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  thumbnail: css`
    position: relative !important;
    width: 100%;
    height: 329px;
    margin-top: 32px;
    border: 0;
    border-radius: 24px;
    object-fit: cover;
  `,

  descriptionWrapper: css`
    padding: 16px;
    margin-top: 16px;
    border: 1px solid ${theme.color.outlineGray};
    border-radius: 16px;
  `,
  tag: css`
    display: flex;
    align-items: center;
    p {
      margin-left: 8px;
      font-size: ${theme.fontSize.md};
      font-weight: 600;
    }
  `,
  description: css`
    margin: 10px 0;
    font-size: ${theme.fontSize.sm};
  `,
  linkButton: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `,

  listItemsWrapper: css`
    padding: 16px;
    margin-top: 40px;
    background-color: ${theme.color.gray100};
    border-radius: 16px;
  `,
  day: css`
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
  `,
  item: css`
    margin-top: 16px;
  `
}
