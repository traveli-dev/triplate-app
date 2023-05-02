import {
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineLink,
  HiOutlinePencilAlt
} from 'react-icons/hi'
import { styles } from '@/styles/components/Inputs/InputTextWithIcon.styles'

type InputTextWithIconProps = {
  iconType: 'link' | 'label' | 'time' | 'memo'
  placeholder: string
}

export const InputTextWithIcon = ({
  iconType,
  placeholder
}: InputTextWithIconProps) => {
  return (
    <div css={styles.inputWrapper}>
      <div css={styles.icon}>
        {iconType == 'link' && <HiOutlineLink size={20} />}
        {iconType == 'label' && <HiOutlinePencilAlt size={20} />}
        {iconType == 'time' && <HiOutlineClock size={20} />}
        {iconType == 'memo' && <HiOutlineDocumentText size={20} />}
      </div>
      <input css={styles.input} placeholder={placeholder} />
    </div>
  )
}
