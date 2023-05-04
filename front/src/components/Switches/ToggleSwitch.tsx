import { styles } from '@/styles/components/Switches/ToggleSwitch.styles'

type ToggleSwitchProps = {
  id: number
}
export const ToggleSwitch = ({ id }: ToggleSwitchProps) => {
  const _id = 'toggle_switch_' + id.toString()
  return (
    <div css={styles.toggleSwitch}>
      <label className="toggle-button-001" htmlFor={_id}>
        <input id={_id} type="checkbox" />
      </label>
    </div>
  )
}
