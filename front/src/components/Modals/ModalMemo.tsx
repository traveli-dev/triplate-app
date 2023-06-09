import { HiOutlinePencilAlt } from 'react-icons/hi'
import { CardMemo } from '@/components/Cards/CardMemo'
import { LinkIconWithTextHorizontal } from '@/components/Links'
import { BaseHalfModal } from '@/components/Modals'
import { styles } from '@/styles/components/Modals/ModalMemo.styles'

type ModalMemoProps = {
  isOpen: boolean
  onClose: () => void
  triplinkId: string
}

export const ModalMemo = ({ isOpen, onClose, triplinkId }: ModalMemoProps) => {
  const data = {
    id: 'abcde', // triplinkのid
    budget: '0',
    items: ['自撮り棒', 'チェキ', '日傘'],
    memo: ''
  }

  return (
    <BaseHalfModal
      isOpen={isOpen}
      title="たびメモ"
      usage="memo"
      onClose={onClose}
    >
      <CardMemo data={data} />
      <div css={styles.layoutLinkItem}>
        <LinkIconWithTextHorizontal
          Icon={HiOutlinePencilAlt}
          href={`/triplink/${triplinkId}/edit/tabimemo`}
          title="たびメモを編集"
        />
      </div>
    </BaseHalfModal>
  )
}
