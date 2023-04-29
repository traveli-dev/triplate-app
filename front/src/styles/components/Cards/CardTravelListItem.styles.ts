import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  item: css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    cursor: pointer;
    background-color: ${theme.color.white};
    border-radius: 100px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.04);
  `,
  values: css`
    color: ${theme.color.black};
  `,
  icon: css`
    margin-right: 28px;
    margin-left: 24px;
  `,
  title: css`
    font-size: ${theme.fontSize.md};
    font-weight: 600;
  `,
  sub: css`
    display: flex;
    gap: 24px;
    margin-top: 6px;
  `,
  textWithIcon: css`
    display: flex;
    align-items: center;
    font-size: ${theme.fontSize.sm};
  `,
  iconSmall: css`
    margin-right: 8px;
  `
}
