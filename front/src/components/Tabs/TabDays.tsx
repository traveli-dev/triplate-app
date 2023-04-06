import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const TabDays = () => {
  return (
    <div css={styles.tabs}>
      <label>
        <input name="tab" type="radio" defaultChecked />
        <span>１日目</span>
      </label>
      <label>
        <input name="tab" type="radio" />
        <span>２日目</span>
      </label>
      <label>
        <input name="tab" type="radio" />
        <span>３日目</span>
      </label>
    </div>
  )
}

const styles = {
  tabs: css`
    position: relative;
    background-color: ${theme.color.white};
    width: 100%;
    height: 44px;
    padding-left: 58px;
    border-bottom: 2px solid ${theme.color.outlineGray};
    & input[type='radio'] {
      // ラジオボタン消す
      display: none;

      & + span {
        display: inline-block;
        margin-right: 8px;
        width: 87px;
        height: 44px;
        color: ${theme.color.gray};
        text-align: center;
        font-size: ${theme.fontSize.md};
        font-weight: 300;
        line-height: 46px;
        border-bottom: 2px solid ${theme.color.outlineGray};
        cursor: pointer;

        &:hover {
          background-color: ${theme.color.bgBlue};
        }
      }

      &:checked + span {
        color: ${theme.color.blue};
        font-weight: 600;
        border-color: ${theme.color.blue};
      }
    }
  `
}
