import { ToastContext, ToastTypes } from "@/components/Toasts"
import { useContext } from "react"

export const useToast =() => {

  const showToast = useContext(ToastContext)
  const openToast = (text: string, toastType: ToastTypes) => {
    showToast && showToast(text, toastType)
  }

  return {openToast}
}