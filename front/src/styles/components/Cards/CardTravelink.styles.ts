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
  imgWrapper: (isSquare: boolean) => css`
    position: relative;
    width: 100%;
    height: ${isSquare ? '100%' : '171px'};
    margin: 0 auto;
    overflow: hidden;
    /* TODO: 無くなる可能性あり */
    filter: drop-shadow(2px 2px 15px rgba(0, 0, 0, 0.2));
    border: 1px solid ${theme.color.bgGray};
    border-radius: ${isSquare ? '32px' : '16px'};
    /* safariでfilterを使うときに必要 */
    transform: translateZ(0);
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
  title: (isSquare: boolean) => css`
    font-size: ${isSquare ? theme.fontSize.sm : theme.fontSize.md};
    font-weight: 600;
  `,
  description: (isSquare: boolean) => css`
    margin-top: 16px;
    margin-left: ${isSquare ? '0' : '14px'};
    text-align: ${isSquare ? 'center' : 'start'};
  `,
  date: (isSquare: boolean) => css`
    margin-top: ${isSquare ? '6px' : '8px'};
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.gray};
  `
}
