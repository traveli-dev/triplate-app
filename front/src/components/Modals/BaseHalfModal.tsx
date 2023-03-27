import React, { useState } from 'react'
import styles from '@/styles/components/Modals/BaseHalfModal.module.scss'
import { Container } from '@/components/Containers'
import { useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
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
  const [deltaY, setDeltaY] = useState(0)

  const handlers = useSwipeable({
    onSwiping: (e) => {
      setDeltaY(e.deltaY)
    },
    onSwipedDown: (e) => {
      if (e.deltaY >= 150) {
        onClose()
      }
      setDeltaY(0)
    }
  })

  const style = {
    transform: `translateY(${deltaY}px)`
  }

  return (
    <div {...handlers}>
      <div className={isOpen ? styles.isOpen : ''}>
        <div className={styles.overlay}>
          <div
            ref={ref}
            style={style}
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
    </div>
  )
}
