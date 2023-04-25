import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    display: block;
    width: 100%;
    height: auto;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.3s 0s ease;
    &:hover,
    &:focus {
      opacity: 0.9;
    }
  `,
  imgWrapper: css`
    width: 100%;
    height: 171px;
    overflow: hidden;
    /* TODO: 無くなる可能性あり */
    filter: drop-shadow(2px 2px 15px rgba(0, 0, 0, 0.2));
    border: 1px solid ${theme.color.bgGray};
    border-radius: 16px;
  `,
  img: css`
    position: relative !important;
    object-fit: cover;
  `,
  title: css`
    margin: 0;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
  `,
  description: css`
    margin-top: 16px;
    margin-left: 14px;
  `,
  date: css`
    margin-top: 8px;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.gray};
  `
}
