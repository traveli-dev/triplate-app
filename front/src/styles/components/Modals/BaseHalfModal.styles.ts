import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const styles = {
  overlay: (isOpen: boolean) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: ${isOpen ? 'auto' : 'none'};
    background-color: #404040;
    opacity: ${isOpen ? 1 : 0};
    transition: opacity linear 0.5s;
  `,
  content: (isOpen: boolean) => css`
    position: fixed;
    bottom: 0;
    z-index: 999;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: ${theme.breakpoint.md};
    padding: 0 48px;
    margin: 0;
    background-color: ${theme.color.white};
    border-radius: 32px 32px 0 0;
    transition: transform linear 0.5s;
    transform: ${isOpen ? 'translateY(0)' : 'translateY(100%)'};
  `
}
