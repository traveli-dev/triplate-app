import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  inputWrapper: css`
    position: relative;
  `,
  icon: css`
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
  `,
  input: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 56px;
    padding: 0 56px;
    font-size: ${theme.fontSize.md};
    background-color: ${theme.color.bgGray};
    border: 1px solid ${theme.color.outlineGray};
    border-radius: 100px;
    outline: none;
  `,
  content: (isOpen: boolean) => css`
    position: fixed;
    bottom: 0;
    z-index: 1000;
    box-sizing: border-box;
    width: 100%;
    max-width: ${theme.breakpoint.md};
    height: 456px;
    padding: 16px 30px 32px 30px;
    margin: 0;
    background-color: ${theme.color.white};
    border-radius: 32px 32px 0 0;
    transition: transform ease-out 0.3s;
    transform: ${isOpen ? 'translateY(0)' : 'translateY(352px)'};
  `
}
