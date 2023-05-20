import { css } from '@emotion/react'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

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
    height: 552px;
    padding: 16px 30px 32px 30px;
    margin: 0;
    background-color: ${theme.color.white};
    border-radius: 32px 32px 0 0;
    transition: transform ease-out 0.3s;
    transform: ${isOpen ? 'translateY(0)' : 'translateY(452px)'};
  `,
  overlay: (isOpen: boolean) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68rem;
    pointer-events: ${isOpen ? 'auto' : 'none'};
    opacity: ${isOpen ? 1 : 0};
    ${mq('sm')} {
      right: 0;
      left: 0;
    }
  `,
  markerWrapper: css`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-right: 16px;
    border: 1.2px solid ${theme.color.outlineGray};
    border-radius: 50%;
  `,
  marker: css`
    display: block;
  `,
  dataWrapper: css`
    width: 100%;
    margin-top: 16px;
    margin-bottom: 16px;
  `,
  addressItem: css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 54px;
    padding: 0 16px;
    margin-bottom: 16px;
    border-radius: calc(54px / 2);
    &:hover,
    &:focus {
      background-color: ${theme.color.bgGray};
    }
  `,
  address: css`
    overflow: hidden;
    font-size: ${theme.fontSize.md};
    text-overflow: ellipsis;
    white-space: nowrap;
  `
}
