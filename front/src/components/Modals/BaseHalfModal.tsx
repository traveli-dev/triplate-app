import { ReactNode } from 'react'
import { Container } from '@/components/Containers'
import { useHalfModal } from '@/hooks/modals'
import { styles } from '@/styles/components/Modals/BaseHalfModal.styles'

type BaseHalfModalProps = {
  ariaLabelledBy: string
  ariaDescribedBy: string
  children: ReactNode
  onClose: () => void
  isOpen: boolean
}

export const BaseHalfModal = ({
  isOpen,
  ariaLabelledBy,
  ariaDescribedBy,
  children,
  onClose
}: BaseHalfModalProps) => {
  const { ref } = useHalfModal(isOpen, onClose)

  return (
    <>
      <div css={styles.overlay(isOpen)}></div>
      <div
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy}
        aria-modal="true"
        css={styles.content(isOpen)}
        ref={ref}
        role="dialog"
      >
        <Container bgColor="white">{children}</Container>
        <button onClick={onClose}>とじる</button>
      </div>
    </>
  )
}
