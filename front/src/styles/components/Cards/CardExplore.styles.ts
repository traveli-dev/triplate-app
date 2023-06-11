import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  wrapper: css`
    position: relative;
    width: 100%;
    height: 360px;
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
    padding: 16px;
    color: ${theme.color.white};
  `,
  title: css`
    margin-bottom: 3px;
    font-size: ${theme.fontSize.xl};
    font-weight: 600;
  `,
  day: css`
    margin-bottom: 3px;
    font-size: ${theme.fontSize.sm};
  `,
  keywords: css`
    margin-bottom: 3px;
    font-size: ${theme.fontSize.sm};
  `
}
