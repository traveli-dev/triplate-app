import { styles } from '@/styles/components/Switches/ToggleSwitch.styles'

type ToggleSwitchProps = {
  id: number
}
export const ToggleSwitch = ({ id }: ToggleSwitchProps) => {
  const _id = 'toggle_switch_' + id.toString()
  return (
    <div css={styles.toggleSwitch}>
      <input id={_id} type="checkbox" />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={_id}></label>
    </div>
  )
}
