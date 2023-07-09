import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

export const styles = {
  wrapper: (isSquare: boolean) => css`
    position: relative;
    width: 100%;
    aspect-ratio: 3/1;
    ${mq('sm')} {
      aspect-ratio: ${isSquare ? '3/1' : '1/1'};
    }
    background-image: linear-gradient(
      180deg,
      rgba(15, 20, 26, 0) 40.63%,
      rgba(15, 20, 26, 0.5) 91.15%
    );
    border-radius: 24px;
  `,
  card: css`
    object-fit: cover;
    border-radius: 24px;
  `,
  blendGradation: css`
    mix-blend-mode: multiply;
  `,
  textWrapper: css`
    position: absolute;
    bottom: 0;
    z-index: 100;

    width: 100%;
    padding: 16px;
    color: ${theme.color.white};
  `,
  title: css`
    margin-bottom: 4px;

    overflow: hidden;
    font-size: ${theme.fontSize.md};
    font-weight: 600;
    text-overflow: ellipsis;
    letter-spacing: 0.12em;
    white-space: nowrap;
  `,
  day: css`
    margin-bottom: 4px;
    font-size: ${theme.fontSize.sm};
    letter-spacing: 0.12em;
  `,
  keywords: css`
    overflow: hidden;
    font-size: ${theme.fontSize.sm};
    text-overflow: ellipsis;
    letter-spacing: 0.12em;
    white-space: nowrap;
  `
}
