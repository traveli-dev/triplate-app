import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  previewImageWrapper: css`
    width: 100%;
    height: 136px;
    overflow: hidden;
    border-radius: 16px;

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
    width: 100%;
    height: 136px;
    font-size: ${theme.fontSize.md};
    font-weight: bold;
    color: ${theme.color.gray};
    cursor: pointer;
    background-color: ${theme.color.bgGray};
    border: 0;
    border-radius: 16px;

    span {
      display: block;
      margin: 8px 0 0 0;
    }

    &:hover,
    &:focus {
      border: 2px solid ${theme.color.outlineGray};
    }
  `
}

export const round = css`
  width: 150px !important;
  height: 150px !important;
  font-size: ${theme.fontSize.sm} !important;
  border-radius: 100px !important;
`
