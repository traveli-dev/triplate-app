import { useEffect, useState } from 'react'

export const useCardMemo = (id: string) => {
  const [checkedData, setCheckedData] = useState<string[]>([])

  // localStorageからchekedListを取得
  const getCheckedList = () => {
    const data = localStorage.getItem(id)
    if (data) {
      const checkedList = data.split(',')
      return checkedList
    }
    return []
  }

  // localStorageのchekedListを更新
  const updateCheckedList = (list: string[]) => {
    // checkedListを更新
    localStorage.setItem(id, list.toString())
  }

  // 新しいchekedListを作成
  const createCheckedList = (index: string) => {
    const checkedList = getCheckedList()
    if (checkedList) {
      if (checkedList.includes(index)) {
        // checkedListから重複するindexを削除
        const newCheckedList = checkedList.filter(
          (checked) => checked !== index
        )
        return newCheckedList
      } else {
        // checkedListにindexを追加
        checkedList.push(index.toString())
        return checkedList
      }
    } else {
      //新しい配列を作成
      return [index]
    }
  }

  useEffect(() => {
    // // 初回時、localStorageのcheckedDataを取得
    const checkedList = getCheckedList()
    setCheckedData(checkedList)
  }, [])

  return {
    checkedData,
    setCheckedData,
    updateCheckedList,
    createCheckedList
  }
}
