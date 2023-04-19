import { css } from "@emotion/react"
import { theme } from "@/styles/theme"

export const styles = {
    item: css`
        width: 100%;
        height: 64px;

    `,
    values:css`
        color: ${theme.color.black};
    `,
    icon:css`
    `,
    title:css`
        font-size: ${theme.fontSize.md};
        font-weight: 600;
    `,
    sub:css`
        display:flex;
    `,
    text_with_icon:css`
            font-size: ${theme.fontSize.sm};
            gap: 18px;
`,
}