import React from 'react'
import styles from '@/styles/components/Modals/BaseHalfModal.module.scss'
import { Container } from '@/components/Containers'
import { useRef } from 'react'
import { useAriaHidden, useFocusTrap, useModal } from '@/hooks/modals'

type BaseHalfModalProps = {
  ariaLabelledBy: string
  ariaDescribedBy: string
  children: React.ReactNode
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
  const ref = useRef<HTMLDivElement>(null)
  const { handlers, animationStyles, cleanUpModal, closeModal } = useModal({
    ref,
    isOpen,
    onClose
  })
  useAriaHidden(ref, isOpen)
  useFocusTrap({ ref, isOpen, onClose, closeModal, cleanUpModal })

  return (
    <div {...handlers}>
      <div className={isOpen ? styles.isOpen : ''}>
        <div className={styles.overlay}>
          <div
            ref={ref}
            style={animationStyles}
            className={styles.content}
            role="dialog"
            aria-modal="true"
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            onTransitionEnd={cleanUpModal}
          >
            <Container bgColor="white">{children}</Container>
            <button onClick={closeModal}></button>
          </div>
        </div>
      </div>
    </div>
  )
}
