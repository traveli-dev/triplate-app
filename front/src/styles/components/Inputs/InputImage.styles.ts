import { css } from '@emotion/react'
import { InputImageType } from '@/components/Inputs'
import { theme } from '@/styles/theme'

const setShape = (type: InputImageType) => {
  if (type === 'thumbnail') {
    return css`
      width: 100%;
      height: 136px;
      border-radius: 16px;
    `
  } else {
    return css`
      width: 150px;
      height: 150px;
      border-radius: 50%;
    `
  }
}

export const styles = {
  previewImage: (type: InputImageType) => css`
    ${setShape(type)}
    overflow: hidden;
    &:hover,
    &:focus {
      border: 2px solid ${theme.color.outlineGray};
    }
  `,
  previewWrapper: css`
    width: 100%;
  `,
  image: css`
    position: relative !important;
    object-fit: cover;
  `,
  hidden: css`
    display: none;
  `,
  defaultImage: (type: InputImageType) => css`
    ${setShape(type)}
    font-size: ${type === 'thumbnail' ? theme.fontSize.md : theme.fontSize.sm};
    font-weight: bold;
    color: ${theme.color.gray};
    cursor: pointer;
    background-color: ${theme.color.bgGray};
    border: 0;
    span {
      display: block;
      margin: 8px 0 0 0;
      font-weight: 600;
      line-height: 21px;
    }
    &:hover,
    &:focus {
      outline: 2px solid ${theme.color.outlineGray};
    }
  `,
  text: css`
    display: inline-block;
    margin-top: 8px;
    font-size: ${theme.fontSize.md};
    &:hover,
    &:focus {
      color: ${theme.color.hoverBlack};
    }
  `
}
