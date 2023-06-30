import { clearError, errorSelectors } from '@/redux/features/errors/errorSlice'
import { useAppDispath, useAppSelector } from '@/redux/rootStore'

type FirebaseErrorCode =
  | 'ok'
  | 'cancelled'
  | 'unknown'
  | 'invalid-argument'
  | 'deadline-exceeded'
  | 'not-found'
  | 'already-exists'
  | 'permission-denied'
  | 'resource-exhausted'
  | 'failed-precondition'
  | 'aborted'
  | 'out-of-range'
  | 'unimplemented'
  | 'internal'
  | 'unavailable'
  | 'data-loss'
  | 'unauthenticated'

type ErrorStatusType = {
  status: number
  message: string
}

type ErrorCodeMapType = {
  [name in FirebaseErrorCode]: ErrorStatusType
}

const errorCodeMap: ErrorCodeMapType = {
  ok: { status: 200, message: '' },
  cancelled: { status: 499, message: '' },
  unknown: { status: 500, message: '' },
  'invalid-argument': { status: 400, message: '' },
  'deadline-exceeded': { status: 504, message: '' },
  'not-found': { status: 404, message: '' },
  'already-exists': { status: 409, message: '' },
  'permission-denied': { status: 403, message: 'その操作は許可されていません' },
  unauthenticated: { status: 401, message: 'ログインしてください' },
  'resource-exhausted': { status: 429, message: '' },
  'failed-precondition': { status: 400, message: '' },
  aborted: { status: 409, message: '' },
  'out-of-range': { status: 400, message: '' },
  unimplemented: { status: 501, message: '' },
  internal: { status: 500, message: '' },
  unavailable: { status: 503, message: '' },
  'data-loss': { status: 500, message: '' }
}

export const useErrorBoundary = () => {
  const error = useAppSelector(errorSelectors.error)
  const dispatch = useAppDispath()

  if (error.code === null) {
    dispatch(clearError())
    return
  }

  if (error.code in errorCodeMap) {
    return errorCodeMap[error.code as keyof typeof errorCodeMap]
  } else {
    return { status: 500, message: '予期しないエラーが発生しました' }
  }
}
