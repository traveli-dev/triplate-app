import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  header: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0 8px 0;
  `,
  heading1: css`
    width: 100%;
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `,
  userInfoWrapper: css`
    padding-top: 16px;
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
    justify-content: space-between;
    margin: 24px 0 16px 0;
  `,
  heading2: css`
    display: flex;
    align-items: center;
    h2 {
      font-size: ${theme.fontSize.lg};
      font-weight: 600;
    }
    p {
      margin-left: 16px;
      font-size: ${theme.fontSize.md};
    }
  `,
  icon: css`
    color: ${theme.color.gray};
  `,
  iconLink: css`
    margin-left: 20px;
  `,
  layoutCardTriplate: css`
    padding-bottom: 16px;
  `,
  layoutButtonFollow: css`
    margin: 16px auto 0 auto;
    text-align: center;
  `
}
