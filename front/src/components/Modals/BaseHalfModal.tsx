import React from 'react'
import styles from '@/styles/components/Modals/BaseHalfModal.module.scss'
import { Container } from '@/components/Containers'
import { useRef } from 'react'
import { useAriaHidden, useFocusTrap } from '@/hooks/modals'

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
  useAriaHidden(ref, isOpen)
  useFocusTrap({ ref, isOpen, onClose })

  return (
    <div className={isOpen ? styles.isOpen : ''}>
      <div className={styles.overlay}>
        <div
          ref={ref}
          className={styles.content}
          role="dialog"
          aria-modal="true"
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
        >
          <Container bgColor="white">{children}</Container>
        </div>
      </div>
    </div>
  )
}
