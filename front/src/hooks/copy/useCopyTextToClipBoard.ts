import { useToast } from '@/hooks/toasts'

export const useCopyTextToClipboard = () => {
  const { openToast } = useToast()

  const copyTextToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        openToast('リンクをコピーしました', 'success')
      })
      .catch(() => {
        openToast('リンクのコピーに失敗しました。', 'error')
      })
  }
  return {
    copyTextToClipboard
  }
}
