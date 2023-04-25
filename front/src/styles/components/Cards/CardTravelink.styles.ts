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
  imgWrapper: (isGrid: boolean) => css`
    width: ${isGrid ? '171px' : '100%'};
    height: 171px;
    overflow: hidden;
    /* TODO: 無くなる可能性あり */
    filter: drop-shadow(2px 2px 15px rgba(0, 0, 0, 0.2));
    border: 1px solid ${theme.color.bgGray};
    border-radius: ${isGrid ? '32px' : '16px'};
  `,
  img: css`
    position: relative !important;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  title: (isGrid: boolean) => css`
    font-size: ${isGrid ? theme.fontSize.sm : theme.fontSize.md};
    font-weight: 600;
  `,
  description: (isGrid: boolean) => css`
    margin-top: 16px;
    margin-left: 14px;
    text-align: ${isGrid ? 'center' : 'start'};
  `,
  date: (isGrid: boolean) => css`
    margin-top: ${isGrid ? '6px' : '8px'};
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.gray};
  `
}
