import { FiInstagram, FiTwitter } from 'react-icons/fi'
import { styles } from '@/styles/components/Inputs/InputLink.styles'

type InputLinkProps = {
  iconType: 'twitter' | 'instagram'
  placeholder: string
}
export const InputLink = ({ iconType, placeholder }: InputLinkProps) => {
  return (
    <div css={styles.wrapper}>
      {iconType == 'twitter' && <FiTwitter size={32} />}
      {iconType == 'instagram' && <FiInstagram size={32} />}
      <input css={styles.input} placeholder={placeholder} />
    </div>
  )
}
