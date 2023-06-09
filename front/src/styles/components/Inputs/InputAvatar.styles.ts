import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  previewImageWrapper: css`
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    &:hover,
    &:focus {
      border: 2px solid ${theme.color.outlineGray};
    }
  `,
  previewImage: css`
    position: relative !important;
    object-fit: cover;
  `,
  hidden: css`
    display: none;
  `,
  uploadImage: css`
    width: 150px;
    height: 150px;
    font-size: ${theme.fontSize.md};
    font-weight: bold;
    color: ${theme.color.gray};
    cursor: pointer;
    background-color: ${theme.color.bgGray};
    border: 0;
    border-radius: 50%;
    span {
      display: block;
      margin: 8px 0 0 0;
      font-size: ${theme.fontSize.sm};
      font-weight: 600;
      line-height: 21px;
    }
    &:hover,
    &:focus {
      border: 2px solid ${theme.color.outlineGray};
    }
  `
}
