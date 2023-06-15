import { styles } from '@/styles/components/Inputs/InputPulldown.styles'

type InputPulldownProps = {
  placeholder: string
  options: {
    name: string
    id: string
  }[]
}

export const InputPulldown = ({ placeholder, options }: InputPulldownProps) => {
  return (
    <div css={styles.wrapper}>
      <select css={styles.select(false)}>
        <option css={styles.placeholder} disabled selected value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
