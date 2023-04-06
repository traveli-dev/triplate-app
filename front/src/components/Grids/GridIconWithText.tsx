import { css } from '@emotion/react'
import { IconWithText } from '@/components/Icons'
import { mq } from '@/styles/utils'

export const GridIconWithText = () => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.column}>
        <IconWithText iconType="qr" />
        <IconWithText iconType="help" />
        <IconWithText iconType="twitter" />
      </div>
      <div css={styles.column}>
        <IconWithText iconType="bell" />
        <IconWithText iconType="mail" />
        <IconWithText iconType="hp" />
      </div>
      <div css={styles.column}>
        <IconWithText iconType="setting" />
        <IconWithText iconType="privacy" />
      </div>
    </div>
  )
}

const styles = {
  wrapper: css`
    display: flex;
    max-width: 400px;
    justify-content: space-between;
    ${mq('sm')} {
      max-width: 300px;
    }
  `,
  column: css`
    display: flex;
    flex-direction: column;
    gap: 3vh;
  `
}
