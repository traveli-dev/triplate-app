import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  wrapper: css`
  `,
  

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
    border-radius: 16px;
    position: relative !important;
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
    color: ${theme.color.gray};
    font-size: ${theme.fontSize.sm};  
    
  `,

  hashtagsWrapper: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    align-items: center;
    margin-top: 4px;
  `,
  hashtag: css`
    height: 29px;
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.black};
    background-color: ${theme.color.gray100};
    border: 0;
    border-radius: 100px;
    padding: 4px 8px;
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
    overflow-wrap: break-word;
    color: ${theme.color.gray700};
    font-size: ${theme.fontSize.sm};
    
  `,
  linkHelp: css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.color.black};
    margin-top: 32px;
    p {
        margin-left: 16px;
        font-size: ${theme.fontSize.sm};
    }
  `,
}




export const FillButtonStyles = {
  wrapper: css`
    width: 100%;
    height: 56px;
    color: ${theme.color.white};
        margin-top: 16px;
    border-radius: 16px;
    background-color: ${theme.color.black};
   
      display: flex;
    justify-content: center;
    align-items: center;
    p {
        margin-left: 16px;
        font-size: ${theme.fontSize.md};
    }
  `
}


export const OutlineButtonStyles = {
  wrapper: css`
    width: 100%;
    height: 56px;
    color: ${theme.color.black};
    margin-top: 16px;
    border-radius: 16px;
    border: 2px solid ${theme.color.black};
    background-color: ${theme.color.white};

          display: flex;
    justify-content: center;
    align-items: center;
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
    margin-top: 32px;
  border: 1px solid ${theme.color.outlineGray};
  border-radius: 16px;
    padding: 24px 16px;
  `,
  userProfileWrapper: css`
    display: flex;
  `,

  userAvatar: css`
      margin-right: 16px;

    border-radius: 100px;
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