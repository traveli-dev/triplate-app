import { HiOutlinePencilAlt } from 'react-icons/hi'
import { CardMemo } from '@/components/Cards/CardMemo'
import { LinkIconWithTextHorizontal } from '@/components/Links'
import { BaseHalfModal } from '@/components/Modals'
import { styles } from '@/styles/components/Modals/ModalMemo.styles'

type ModalMemoProps = {
  isOpen: boolean
  onClose: () => void
}

export const ModalMemo = ({ isOpen, onClose }: ModalMemoProps) => {
  const tabimemo = {
    id: 'abcde', // travelinkのid
    budget: '0',
    items: ['自撮り棒', 'チェキ', '日傘'],
    memo: ''
  }

  return (
    <BaseHalfModal isOpen={isOpen} title="たびメモ" onClose={onClose}>
      <CardMemo
        budget={tabimemo.budget}
        id={tabimemo.id}
        items={tabimemo.items}
        memo={tabimemo.memo}
      />
      <div css={styles.layoutLinkItem}>
        <LinkIconWithTextHorizontal
          Icon={HiOutlinePencilAlt}
          href="/"
          title="たびメモを編集"
        />
      </div>
    </BaseHalfModal>
  )
}
