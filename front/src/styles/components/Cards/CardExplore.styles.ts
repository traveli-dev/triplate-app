import { theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const styles = {
wrapper:css`
            position: relative;
        width: 100%;
        height: 360px;
        border-radius: 24px;

`,

    card: css`
    object-fit: cover;
    `,
    textWrapper: css`
        position: absolute;
        bottom: 0;
        padding: 16px;
        z-index: 100;
        color: ${theme.color.white};
    `,
    title: css`
        font-size: ${theme.fontSize.xl};
        font-weight: 600;
        margin-bottom: 3px;
    `,
    day: css`
        font-size: ${theme.fontSize.sm};
                margin-bottom: 3px;
    `,
    keywords: css`
        font-size: ${theme.fontSize.sm};
            margin-bottom: 3px;
    `
}