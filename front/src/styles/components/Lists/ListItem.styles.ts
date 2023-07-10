import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  listItemWrapper: (imgSrc: string | undefined) => css`
    a {
      padding: ${imgSrc ? '10px' : '16px'};
      display: block;
    }
    background-color: ${theme.renewalColor.white};
    &:hover {
      background-color: ${theme.renewalColor.hoverGray};
      ${mq('sm')} {
        background-color: ${theme.renewalColor.white};
      }
    }
  `,
  item: css`
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
  `,
  textWrapper: css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  title: css`
    font-size: ${theme.fontSize.md};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  subText: css`
    margin: 4px 0 0 0;
    font-size: ${theme.fontSize.sm};
    color: ${theme.renewalColor.gray};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
