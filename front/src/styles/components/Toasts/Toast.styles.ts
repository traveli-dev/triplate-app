import {css} from "@emotion/react";
import {theme} from "@/styles/theme";


export const styles = {
  toastWrapper:(type:string)=> css`
    display: flex;
    align-content: center;
    column-gap: 16px;
    width: 100%;
    height: fit-content;
    padding: 8px 16px;
    ${(type == 'success') &&
    css`
      color: ${theme.color.toastGreen};
      background-color: ${theme.color.toastBgGreen};
      border: 2px solid ${theme.color.toastGreen};
    `
    }
    ${(type == 'error') &&
    css`  
      color: ${theme.color.toastRed};
      background-color: ${theme.color.toastBgRed};
      border: 2px solid ${theme.color.toastRed};
    `
    }
    border-radius: 8px;
  `,
  iconWrapper: css`
    width: 24px;
    height: 24px;
    margin: auto 0;
  `,
  message: css`
    width: calc(100% - 40px);
    font-weight: 600;
    font-size: ${theme.fontSize.md};
    overflow-wrap: break-word;
    margin: auto 0;
  `,
}