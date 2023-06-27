import { useContext } from "react"
import { ToastContext, ToastTypes } from "@/components/Toasts"

export const useToast =() => {

  const showToast = useContext(ToastContext)
  const openToast = (text: string, toastType: ToastTypes) => {
    showToast && showToast(text, toastType)
  }

  return {openToast}
}