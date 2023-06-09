import { ComponentPropsWithRef } from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import { styles } from '@/styles/components/Buttons/FloatingActionButton.styles'

type FloatingActionButtonProps = ComponentPropsWithRef<'button'>

export const FloatingActionButton = (props: FloatingActionButtonProps) => {
  return (
    <button css={styles.button} {...props}>
      <HiOutlinePlus size={24} />
    </button>
  )
}
