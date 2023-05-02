import { HiDotsVertical, HiOutlineX } from 'react-icons/hi'
import { InputTextWithIcon } from '@/components/Inputs'
import { ToggleSwitch } from '@/components/Switches'
import { link, styles } from '@/styles/components/Cards/CardLinkEdit.styles'

type CardLinkEditProps = {
  cardType: 'map' | 'link'
  label: string
  id: number
}

export const CardLinkEdit = ({ cardType, label, id }: CardLinkEditProps) => {
  return (
    <div css={cardType == 'link' ? [link, styles.wrapper] : styles.wrapper}>
      <div css={styles.head}>
        <div css={styles.label}>{label}</div>
        <button css={styles.menuButton}>
          <HiDotsVertical size={24} />
        </button>
      </div>
      <div css={styles.inputWrapper}>
        {cardType == 'link' && (
          <div css={styles.inputLink}>
            <InputTextWithIcon iconType="link" placeholder="https://---" />
          </div>
        )}
        <InputTextWithIcon iconType="label" placeholder="ラベル" />
        <div css={styles.inputTime}>
          <InputTextWithIcon iconType="time" placeholder="00:00" />
          <button css={styles.initButton}>
            <HiOutlineX size={24} />
          </button>
        </div>
        <div css={styles.inputMemo}>
          <InputTextWithIcon iconType="memo" placeholder="荷物預ける" />
          <button css={styles.initButton}>
            <HiOutlineX size={24} />
          </button>
        </div>
      </div>
      <div css={styles.foot}>
        <ToggleSwitch id={id} />
        <div>メンバーに非公開にする</div>
      </div>
    </div>
  )
}
