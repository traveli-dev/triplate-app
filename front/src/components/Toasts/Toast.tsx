import {styles} from "@/styles/components/Toasts/Toast.styles";
import {HiOutlineCheckCircle, HiOutlineXCircle} from "react-icons/hi";

type ToastProps = {
  message: string
  type: 'success' | 'error'
}


export const Toast = ({message, type}: ToastProps) => {
  return (
    <>
      <div css={styles.toastWrapper(type)}>
        <div css={styles.iconWrapper}>
          {type == 'success' &&
              <HiOutlineCheckCircle size={24}/>}
          {type == 'error' &&
              <HiOutlineXCircle size={24}/>}
        </div>
        <p css={styles.message}>
          {message}
        </p>
      </div>
    </>
  )
}