import { ReactNode } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { useHalfModal } from '@/hooks/modals'
import { styles } from '@/styles/components/Modals/BaseHalfModal.styles'

type BaseHalfModalProps = {
  children: ReactNode
  onClose: () => void
  isOpen: boolean
  title: string
  usage: string
}

export const BaseHalfModal = ({
  isOpen,
  children,
  onClose,
  title,
  usage
}: BaseHalfModalProps) => {
  const { ref } = useHalfModal(isOpen, onClose)

  return (
    <>
      <div css={styles.overlay(isOpen)}></div>
      <div
        aria-describedby={`modal-body-${usage}`}
        aria-labelledby={`modal-title-${usage}`}
        aria-modal="true"
        css={styles.content(isOpen)}
        ref={ref}
        role="dialog"
      >
        <header css={styles.header}>
          <h1 id={`modal-title-${usage}`}>{title}</h1>
          <button css={styles.closeButton} onClick={onClose}>
            <HiOutlineX size={24} />
          </button>
        </header>
        <div id={`modal-body-${usage}`}>{children}</div>
      </div>
    </>
  )
}
