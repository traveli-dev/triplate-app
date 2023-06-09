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
import { styles } from '@/styles/components/Cards/CardLinkEdit.styles'

type CardLinkEditProps = {
  cardType: 'map' | 'link'
  label: string
}

export const CardLinkEdit = ({ cardType, label }: CardLinkEditProps) => {
  const [timeHidden, setTimeHidden] = useState(false)
  const [memoHidden, setMemoHidden] = useState(false)
  const [open, setOpen] = useState(false)
  return (
    <div css={styles.wrapper}>
      <div css={styles.header}>
        <div css={styles.label}>{label}</div>
        <button css={styles.iconButton} onClick={() => setOpen((v) => !v)}>
          {open ? <HiOutlineX size={24} /> : <HiDotsVertical size={24} />}
        </button>
      </div>
      {open && (
        <div css={styles.popUpWrapper}>
          {timeHidden && (
            <button
              css={styles.popUpButton()}
              onClick={() => {
                setTimeHidden((v) => !v)
                setOpen((v) => !v)
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
                setMemoHidden((v) => !v)
                setOpen((v) => !v)
              }}
            >
              <HiOutlineDocumentText size={20} />
              <span css={styles.popUpText}>メモを追加</span>
            </button>
          )}
          <button
            css={styles.popUpButton('caution')}
            onClick={() => setOpen((v) => !v)}
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
            placeholder="たびに関するURL"
            readOnly={cardType === 'map'}
          />
        </div>
      </div>
      <div css={styles.inputItemWrapper}>
        <HiOutlinePencilAlt size={20} />
        <div css={styles.layoutInputItem}>
          <InputText css={styles.input} placeholder="タイトル" />
        </div>
      </div>
      <div css={[styles.inputItemWrapper, timeHidden && styles.hidden]}>
        <HiOutlineClock size={20} />
        <div css={styles.layoutInputItem}>
          <InputText css={styles.input} placeholder="00:00" />
        </div>
        <div css={styles.layoutIconButton}>
          <button
            css={styles.iconButton}
            onClick={() => setTimeHidden((v) => !v)}
          >
            <HiOutlineX size={24} />
          </button>
        </div>
      </div>
      <div css={[styles.inputItemWrapper, memoHidden && styles.hidden]}>
        <HiOutlineDocumentText size={20} />
        <div css={styles.layoutInputItem}>
          <InputText css={styles.input} placeholder="ひとことメモ" />
        </div>
        <div css={styles.layoutIconButton}>
          <button
            css={styles.iconButton}
            onClick={() => setMemoHidden((v) => !v)}
          >
            <HiOutlineX size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
