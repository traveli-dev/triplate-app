import { css } from "@emotion/react"
import { theme } from "@/styles/theme"

export const styles = {
    item: css`
    display: flex;
        width: 100%;
        height: 64px;
        background:${theme.color.white};
        border-radius:100px;
        align-items: center;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.04);
    `,
    values: css`
        color: ${theme.color.black};
    `,
    icon: css`
        margin-left: 24px;
        margin-right: 28px;
    `,
    title: css`
        font-size: ${theme.fontSize.md};
        font-weight: 600;
    `,
    sub: css`
        display:flex;
        gap: 24px;          

    `,
    text_with_icon: css`
    display: flex;
    align-items: center;
            font-size: ${theme.fontSize.sm};
    `,
    icon_small: css`
            margin-right:8px;
    `
}