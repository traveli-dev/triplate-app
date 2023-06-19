import { useState } from 'react'
import {
  HiDotsVertical,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineLink,
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiOutlineX
} from 'react-icons/hi'
import { InputText } from '@/components/Inputs'
import { styles } from '@/styles/components/Cards/CardTriplinkEdit.styles'

type CardTriplinkEditProps = {
  cardType: 'map' | 'link'
  label: string
}

export const CardTriplinkEdit = ({
  cardType,
  label
}: CardTriplinkEditProps) => {
  const [timeHidden, setTimeHidden] = useState(false)
  const [memoHidden, setMemoHidden] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <div css={styles.wrapper}>
      <div css={styles.header}>
        <div css={styles.label}>{label}</div>
        <button css={styles.iconButton} onClick={() => setOpen(true)}>
          {open ? <HiOutlineX size={24} /> : <HiDotsVertical size={24} />}
        </button>
      </div>
      {open && (
        <div css={styles.popUpWrapper}>
          {timeHidden && (
            <button
              css={styles.popUpButton()}
              onClick={() => {
                setTimeHidden(false)
                setOpen(false)
              }}
            >
              <HiOutlineClock size={20} />
              <span css={styles.popUpText}>時間を追加</span>
            </button>
          )}
          {memoHidden && (
            <button
              css={styles.popUpButton()}
              onClick={() => {
                setMemoHidden(false)
                setOpen(false)
              }}
            >
              <HiOutlineDocumentText size={20} />
              <span css={styles.popUpText}>メモを追加</span>
            </button>
          )}
          <button
            css={styles.popUpButton('caution')}
            onClick={() => setOpen(false)}
          >
            <HiOutlineTrash size={20} />
            <span css={styles.popUpText}>カードを削除</span>
          </button>
        </div>
      )}

      <div css={styles.inputItemWrapper}>
        <HiOutlineLink size={20} />
        <div css={styles.layoutInputItem}>
          <InputText
            css={[styles.input, cardType === 'map' && styles.readonly]}
            isInvalid={false}
            placeholder="たびに関するURL"
            readOnly={cardType === 'map'}
          />
        </div>
      </div>
      <div css={styles.inputItemWrapper}>
        <HiOutlinePencilAlt size={20} />
        <div css={styles.layoutInputItem}>
          <InputText
            css={styles.input}
            isInvalid={false}
            placeholder="タイトル"
          />
        </div>
      </div>
      <div css={[styles.inputItemWrapper, timeHidden && styles.hidden]}>
        <HiOutlineClock size={20} />
        <div css={styles.layoutInputItem}>
          <InputText css={styles.input} isInvalid={false} placeholder="00:00" />
        </div>
        <div css={styles.layoutIconButton}>
          <button
            css={styles.iconButton}
            onClick={() => {
              setTimeHidden(true)
              setOpen(false)
            }}
          >
            <HiOutlineX size={24} />
          </button>
        </div>
      </div>
      <div css={[styles.inputItemWrapper, memoHidden && styles.hidden]}>
        <HiOutlineDocumentText size={20} />
        <div css={styles.layoutInputItem}>
          <InputText
            css={styles.input}
            isInvalid={false}
            placeholder="ひとことメモ"
          />
        </div>
        <div css={styles.layoutIconButton}>
          <button
            css={styles.iconButton}
            onClick={() => {
              setMemoHidden(true)
              setOpen(false)
            }}
          >
            <HiOutlineX size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
