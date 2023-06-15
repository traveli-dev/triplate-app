import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  triplateInfosWrapper: css`
    margin: 24px 28px 0 28px;
    text-align: center;
  `,
  thumbnailWrapper: css`
    width: 110px;
    aspect-ratio: 2/1;
    ${mq('sm')} {
      aspect-ratio: 1/1;
    }
    margin: 0 auto;
  `,
  thumbnail: css`
    position: relative !important;
    border-radius: 16px;
    object-fit: cover;
  `,
  title: css`
    margin-top: 16px;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    color: ${theme.color.black};
  `,
  day: css`
    margin-top: 4px;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.gray};
  `,

  hashtagsWrapper: css`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 4px;
  `,
  hashtag: css`
    height: 29px;
    padding: 4px 8px;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.black};
    background-color: ${theme.color.gray100};
    border: 0;
    border-radius: 100px;
    p {
      line-height: 21px;
    }
  `,
  descriptionWrapper: css`
    display: block;
    width: 241px;
    margin: 4px auto 0 auto;
  `,
  description: css`
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.gray700};
    overflow-wrap: break-word;
  `,
  linkHelp: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    color: ${theme.color.black};
    p {
      margin-left: 16px;
      font-size: ${theme.fontSize.sm};
    }
  `
}

export const FillButtonStyles = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56px;
    margin-top: 16px;
    color: ${theme.color.white};
    background-color: ${theme.color.black};
    border-radius: 16px;
    p {
      margin-left: 16px;
      font-size: ${theme.fontSize.md};
    }
  `
}

export const OutlineButtonStyles = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56px;
    margin-top: 16px;
    color: ${theme.color.black};
    background-color: ${theme.color.white};
    border: 2px solid ${theme.color.black};
    border-radius: 16px;
    p {
      margin-left: 10px;
      font-size: ${theme.fontSize.md};
    }
  `
}

export const contentStyles = {
  thumbnail: css`
    position: relative !important;
    width: 100%;
    height: 329px;
    margin-top: 32px;
    border: 0;
    border-radius: 24px;
    object-fit: cover;
  `,

  descriptionWrapper: css`
    padding: 16px;
    margin-top: 16px;
    border: 1px solid ${theme.color.outlineGray};
    border-radius: 16px;
  `,
  tag: css`
    display: flex;
    align-items: center;
    p {
      margin-left: 8px;
      font-size: ${theme.fontSize.md};
      font-weight: 600;
    }
  `,
  description: css`
    margin: 10px 0;
    font-size: ${theme.fontSize.sm};
  `,
  linkButton: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `,

  listItemsWrapper: css`
    padding: 16px;
    margin-top: 40px;
    background-color: ${theme.color.gray100};
    border-radius: 16px;
  `,
  day: css`
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
  `,
  item: css`
    margin-top: 16px;
  `
}

export const CardUserProfileStyles = {
  userProfileCardWrapper: css`
    height: 266px;
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
