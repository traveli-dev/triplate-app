import { FiInstagram, FiTwitter } from 'react-icons/fi'
import { styles } from '@/styles/components/Inputs/InputLink.styles'

type InputLinkProps = {
  iconType: 'twitter' | 'instagram'
  placeholder: string
}
export const InputLink = ({ iconType, placeholder }: InputLinkProps) => {
  return (
    <div css={styles.wrapper}>
      <label htmlFor={iconType}>
        {iconType == 'twitter' && <FiTwitter size={28} />}
        {iconType == 'instagram' && <FiInstagram size={28} />}
        <input css={styles.input} id={iconType} placeholder={placeholder} />
      </label>
    </div>
  )
}
