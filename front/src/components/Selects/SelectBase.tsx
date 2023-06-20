import { UseFormRegisterReturn } from 'react-hook-form'
import { styles } from '@/styles/components/Selects/SelectBase.styles'

type SelectBaseProps = {
  placeholder: string
  isInvalid: boolean
  register: UseFormRegisterReturn
  disabled: boolean
  options: {
    name: string
    id: string
  }[]
}

export const SelectBase = ({
  placeholder,
  options,
  isInvalid,
  register,
  disabled
}: SelectBaseProps) => {
  return (
    <div css={styles.wrapper}>
      <select css={styles.select(isInvalid)} disabled={disabled} {...register}>
        <option css={styles.placeholder} disabled value="">
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
