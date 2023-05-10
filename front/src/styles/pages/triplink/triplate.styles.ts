import { theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const styles = {

    headWrapper: css`
      display: flex;
      justify-content: space-between;
      margin-top: 32px;
    `,
    textHead: css`
      
        font-size: ${theme.fontSize.lg};
      font-weight: 600;
    `,
    textSub: css`
      margin-top: 8px;
      font-size: ${theme.fontSize.md};

    `,
    menuButton: css`
      
    `,
    thumbnail: css`
      width: 100%;
      height: 329px;
      border: 0;
      border-radius: 24px;
      
      position: relative !important;
      object-fit: cover;
      
    `,
    tag: css`
      display: flex;
      align-items: center;
      margin-top: 15px;
     p {
       font-size: ${theme.fontSize.md};
        font-weight: 600;
       margin-left: 8px;
      }
    `,
    description: css`
      font-size: ${theme.fontSize.sm};
      margin: 10px 0;
    
    `,
    linkButton: css`
      display: flex;
      
      gap: 8px;
    `,
}