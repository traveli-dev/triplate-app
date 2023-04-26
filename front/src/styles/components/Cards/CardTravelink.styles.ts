import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    display: block;
    width: 100%;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.3s 0s ease;
    &:hover,
    &:focus {
      opacity: 0.9;
    }
  `,
  imgWrapper: (isGrid: boolean) => css`
    position: relative;
    width: 100%;
    height: ${isGrid ? '100%' : '171px'};
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid ${theme.color.bgGray};
    border-radius: ${isGrid ? '32px' : '16px'};
  `,
  imgSquare: css`
    /* 正方形を維持する */
    &::before {
      display: block;
      padding-top: 100%;
      content: '';
    }
  `,
  img: css`
    object-fit: cover;
    display: block;
  `,
  title: (isGrid: boolean) => css`
    font-size: ${isGrid ? theme.fontSize.sm : theme.fontSize.md};
    font-weight: 600;
  `,
  description: (isGrid: boolean) => css`
    margin-top: 16px;
    margin-left: ${isGrid ? '0' : '14px'};
    text-align: ${isGrid ? 'center' : 'start'};
  `,
  date: (isGrid: boolean) => css`
    margin-top: ${isGrid ? '6px' : '8px'};
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.gray};
  `
}
