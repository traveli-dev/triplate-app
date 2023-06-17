import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  triplateInfosWrapper: css`
    padding: 24px 16px 0 16px;
    text-align: center;
  `,
  thumbnailWrapper: css`
    width: 110px;
    aspect-ratio: 1/1;

    margin: 0 auto;
  `,
  thumbnail: css`
    position: relative !important;
    border-radius: 16px;
    object-fit: cover;
  `,
  title: css`
    width: 100%;
    margin-top: 16px auto 0 auto;
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
    row-gap: 4px;
    column-gap: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
  `,
  hashtag: css`
    height: 29px;
    padding: 4px 8px;
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.black};
    background-color: ${theme.color.gray100};
    border: 0;
    border-radius: 100px;
    p {
      line-height: 21px;
    }
  `,
  description: css`
    width: 100%;
    margin-top: 8px;
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
