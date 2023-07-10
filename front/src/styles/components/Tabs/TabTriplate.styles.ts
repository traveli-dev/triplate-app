import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  thumbnail: css`
    object-fit: cover;
    border-radius: 24px;
  `,
  imgWrapper: css`
    margin: 32px 0 0 0;
    position: relative;
    width: 100%;
    aspect-ratio: 2/1;
    ${mq('sm')} {
      aspect-ratio: 1/1;
    }
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
  day: css`
    margin-bottom: 16px;
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
    letter-spacing: 0.1em;
  `,
  layoutCardTripListItem: css`
    margin-bottom: 16px;
  `,
  cardTripListItemWrapper: css`
    padding: 16px;
    margin-top: 32px;
    background-color: ${theme.color.bgGray};
    border-radius: 16px;
  `
}
