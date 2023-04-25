import { useCardMemo } from '@/hooks/cards'
import { styles } from '@/styles/components/Cards/CardMemo.styles'

type CardMemoProps = {
  id: string
  budget: string
  items: string[]
  memo: string
}

export const CardMemo = ({ id, budget, items, memo }: CardMemoProps) => {
  const { checkedData, setCheckedData, updateCheckedList, createCheckedList } =
    useCardMemo(id)

  return (
    <div css={styles.memoWrapper}>
      <ul css={styles.memo}>
        <li>
          <p css={styles.title}>持ち物</p>
          <ul css={styles.item}>
            {items.length
              ? items.map((item, index) => (
                  <li key={index}>
                    <input
                      checked={checkedData.includes(index.toString())}
                      css={styles.checkbox}
                      id={`item${index}`}
                      type="checkbox"
                      onChange={() => {
                        const newList = createCheckedList(index.toString())
                        updateCheckedList(newList)
                        setCheckedData(newList)
                      }}
                    />
                    <label htmlFor={`item${index}`}> {item}</label>
                  </li>
                ))
              : 'ー'}
          </ul>
        </li>
        <li>
          <p css={styles.title}>予算</p>
          <p css={styles.item}>{budget ? <>{budget}円</> : '０円'}</p>
        </li>
        <li>
          <p css={styles.title}>メモ</p>
          <p css={styles.item}>{memo ? memo : 'ー'}</p>
        </li>
      </ul>
    </div>
  )
}
