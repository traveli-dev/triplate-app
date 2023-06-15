import { styles } from '@/styles/components/Selects/SelectBase.styles'

type SelectBaseProps = {
  placeholder: string
  isInvalid: boolean
  options: {
    name: string
    id: string
  }[]
}

export const SelectBase = ({
  placeholder,
  options,
  isInvalid
}: SelectBaseProps) => {
  return (
    <div css={styles.wrapper}>
      <select css={styles.select(isInvalid)}>
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
