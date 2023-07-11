import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  header: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  heading1: css`
    width: 100%;
    padding: 24px 0;
    overflow: hidden;
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  userInfoWrapper: css`
    padding-top: 16px;
    text-align: center;
  `,
  userName: css`
    margin: 16px 0 0 0;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
  `,
  userDescription: css`
    margin: 8px 0 0 0;
    font-size: ${theme.fontSize.sm};
    line-height: 1.4;
  `,
  ffWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0 0 0;
  `,
  ffLink: css`
    padding: 4px 16px;
    background-color: ${theme.renewalColor.white};
    border-radius: 100px;
    &:hover,
    &:focus {
      background-color: ${theme.renewalColor.hoverGray};
    }
  `,
  ffNumber: css`
    font-size: ${theme.fontSize.md};
    font-weight: 600;
  `,
  ffText: css`
    margin-left: 8px;
    font-size: ${theme.fontSize.sm};
    font-weight: 300;
  `,
  ffBorder: css`
    display: inline-block;
    width: 1px;
    height: 20px;
    margin: 0 8px;
    background-color: ${theme.color.black};
  `,
  actionWrapper: css`
    display: flex;
    gap: 10px;
    margin: 24px 0 0 0;
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
    padding: 8px;
    margin-left: 20px;
    background-color: ${theme.renewalColor.white};
    border-radius: 100px;
    &:hover {
      background-color: ${theme.renewalColor.hoverGray};
    }
    &:focus {
      background-color: ${theme.renewalColor.white};
    }
  `,
  layoutCardTriplate: css`
    padding-bottom: 16px;
  `,
  layoutButtonFollow: css`
    margin: 16px auto 0 auto;
    text-align: center;
  `
}
