import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    margin: 0 16px;
  `,
  headWrapper: css`
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
  `,
  textHead: css`
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
  `,
  textSub: css`
    margin-top: 8px;
    font-size: ${theme.fontSize.md};
  `,

  tab: css`
    margin-top: 40px;
  `,


  userProfileCardWrapper: css`
    height: 266px;
  border: 1px solid ${theme.color.outlineGray};
  border-radius: 16px;
    padding: 24px 16px;
  `,
  userProfileWrapper: css`
    display: flex;
  `,
  userAvatarWrapper: css`
    width: 64px;
    height: 64px;
        margin-right: 16px;

  `,
  userAvatar: css`
    border-radius: 100px;
    position: relative !important;
    object-fit: cover;
  `,

  userName: css`
    font-weight: 600;
      color: ${theme.color.black};
    font-size: ${theme.fontSize.lg};
    margin-top: 6.5px;
  `,
  userId: css`
  color: ${theme.color.gray};
      font-size: ${theme.fontSize.sm};
`,
  userStatus: css`
    color: ${theme.color.gray};
    margin-top: 8px;
`,
  userFF: css`
        color: ${theme.color.black};
        margin-top: 8px;

`,
  buttonFollow: css`
    margin-top: 24px;
  `,
}