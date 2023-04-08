import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    z-index: 1;
    display: block;
    width: 100%;
    height: auto;
    color: ${theme.color.black};
    text-decoration: none;
    background-color: ${theme.color.white};
    border: 1px solid ${theme.color.outlineGray};
    border-radius: 16px;
  `,
  imgWrapper: css`
    z-index: 1;
    width: 100%;
    height: 136px;
    overflow: hidden;
    border-radius: 16px 16px 0 0;
  `,
  img: css`
    position: relative !important;
    object-fit: cover;
    transition: all 0.3s 0s ease;
    .wrapper:hover &,
    .wrapper:focus & {
      opacity: 0.9;
    }
  `,
  content: css`
    padding: 10px 16px;
    background-color: ${theme.color.white};
    border-radius: 0 0 16px 16px;
    transition: all 0.3s 0s ease;
    .wrapper:hover &,
    .wrapper:focus & {
      opacity: 0.9;
    }
  `,
  title: css`
    margin: 0;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
  `,
  day: css`
    margin: 8px 0 0 0;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.gray};
  `,
  layoutAvatarWithText: css`
    margin: 8px 0;
  `,
  layoutChipTag: css`
    margin: 8px 0;
  `
}