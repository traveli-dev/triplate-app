import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  header: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  heading1: css`
    padding: 24px 0;
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
  `,
  userInfoWrapper: css`
    text-align: center;
  `,
  userName: css`
    font-weight: 600;
    font-size: ${theme.fontSize.md};
    margin: 16px 0 0 0;
  `,
  userDescription: css`
    line-height: 1.4;
    font-size: ${theme.fontSize.sm};
    margin: 8px 0 0 0;
  `,
  ffWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0 0 0;
  `,
  ffLink: css`
    padding: 4px 0;
  `,
  ffNumber: css`
    font-weight: 600;
    font-size: ${theme.fontSize.md};
  `,
  ffText: css`
    font-weight: 300;
    margin-left: 8px;
    font-size: ${theme.fontSize.sm};
  `,
  ffBorder: css`
    display: inline-block;
    height: 20px;
    width: 1px;
    margin: 0 8px;
    background-color: ${theme.color.black};
  `,
  actionWrapper: css`
    margin: 24px 0 0 0;
    display: flex;
    gap: 10px;
  `,
  layoutButtonFill: css`
    margin-top: 12px;
  `,
  header2: css`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    p {
      font-size: ${theme.fontSize.md};
    }
  `,
  heading2: css`
    width: 100%;
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
  `
}
