import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  listItemWrapper: (imgSrc: string | undefined) => css`
    a {
      display: block;
      padding: ${imgSrc ? '10px' : '16px'};
    }
    background-color: ${theme.renewalColor.white};
    &:hover,
    &:focus {
      background-color: ${theme.renewalColor.hoverGray};
      ${mq('sm')} {
        background-color: ${theme.renewalColor.white};
      }
    }
  `,
  item: css`
    display: flex;
    gap: 16px;
    align-items: center;
    width: 100%;
  `,
  textWrapper: css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
  `,
  title: css`
    margin: 0;
    overflow: hidden;
    font-size: ${theme.fontSize.md};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  subText: css`
    margin: 4px 0 0 0;
    overflow: hidden;
    font-size: ${theme.fontSize.sm};
    color: ${theme.renewalColor.gray};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  img: css`
    object-fit: cover;
    border-radius: 8px;
  `,
  imgWrapper: css`
    position: relative;
    width: 70px;
    height: 70px;
    aspect-ratio: 1/1;
  `
}
