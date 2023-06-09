import { ComponentPropsWithRef } from 'react'
import { HiOutlineChevronLeft, HiOutlineDotsHorizontal } from 'react-icons/hi'
import { styles } from '@/styles/components/Buttons/ButtonIconRound.styles'

type ButtonIconRoundProps = ComponentPropsWithRef<'button'> & {
  icon: 'back' | 'menu'
}

export const ButtonIconRound = ({ icon, ...props }: ButtonIconRoundProps) => {
  return (
    <button css={styles.button} {...props}>
      {icon == 'back' && <HiOutlineChevronLeft size={24} />}
      {icon == 'menu' && <HiOutlineDotsHorizontal size={24} />}
    </button>
  )
}
