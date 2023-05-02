import { theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const styles= css`
    width: 100%;
    
  padding: 16px;
    border: 0;
  border-radius: 16px;
  font-size: ${theme.fontSize.md};
    background-color: ${theme.color.bgGray};
  :focus{
    outline: 2px solid ${theme.color.outlineGray};
  }
`