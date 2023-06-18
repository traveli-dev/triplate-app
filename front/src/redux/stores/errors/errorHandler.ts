import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit'
import { setError } from '@/redux/stores'

export const errorHandler: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // Getリクエスト失敗時
    if (action.type === 'baseFirestoreApi/executeQuery/rejected') {
      next(
        setError({
          code: action?.payload?.code,
          message: action?.payload?.message
        })
      )
    }
  }
  return next(action)
}
