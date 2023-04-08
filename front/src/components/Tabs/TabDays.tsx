import { styles } from '@/styles/components/Tabs/TabDays.styles'

export const TabDays = () => {
  return (
    <div css={styles.tabs}>
      <label>
        <input defaultChecked name="tab" type="radio" />
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
