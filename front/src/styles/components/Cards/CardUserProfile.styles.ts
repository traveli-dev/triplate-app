import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  userProfileCardWrapper: css`
    padding: 24px 16px;
    margin-top: 32px;
    border: 1px solid ${theme.color.outlineGray};
    border-radius: 16px;
  `,
  userProfileWrapper: css`
    display: flex;
  `,

  userAvatar: css`
    margin-right: 16px;

    border-radius: 100px;
  `,

  userName: css`
    margin-top: 6.5px;
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
    color: ${theme.color.black};
  `,
  userId: css`
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.gray};
  `,
  userStatus: css`
    margin-top: 8px;
    color: ${theme.color.gray};
  `,
  userFF: css`
    margin-top: 8px;
    color: ${theme.color.black};
  `,
  buttonFollow: css`
    margin-top: 24px;
  `
}
