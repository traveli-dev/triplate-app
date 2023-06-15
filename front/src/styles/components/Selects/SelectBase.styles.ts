import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: middle;

    &::before {
      position: absolute;
      top: 50%;
      right: 16px;
      width: 10px;
      height: 10px;
      margin-top: -7px;
      content: '';
      border: 0;
      border-right: solid 2px ${theme.color.gray};
      border-bottom: solid 2px ${theme.color.gray};
      transform: rotate(45deg);
    }
  `,
  select: (isInvalid: boolean) => css`
    width: 100%;
    padding: 12px 47px 12px 16px;
    font-size: ${theme.fontSize.md};
    color: ${theme.color.gray};
    text-overflow: ellipsis;
    background-color: ${theme.color.bgGray};
    border-radius: 100px;

    &:hover,
    &:focus {
      outline: 2px solid
        ${isInvalid ? theme.color.red : theme.color.outlineGray};
    }
    &:disabled {
      background-color: ${theme.color.outlineGray};
    }
  `,
  placeholder: css`
    /* placeholderは選択候補に表示させない */
    display: none;
  `
}
