import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { ALL_CLEAR } from '@/redux/actions'
import {
  authReducer,
  mapReducer,
  currentUserReducer,
  toastReducer,
  errorReducer,
  errorHandler
} from '@/redux/features'
import { baseFirestoreApi } from '@/redux/services/firestore'
import { baseStorageApi } from '@/redux/services/storage'

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispath = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const rootReducer = combineReducers({
  auth: authReducer,
  map: mapReducer,
  user: currentUserReducer,
  toast: toastReducer,
  error: errorReducer,
  [baseFirestoreApi.reducerPath]: baseFirestoreApi.reducer,
  [baseStorageApi.reducerPath]: baseStorageApi.reducer
})

export const store = configureStore({
  reducer: (state, action) => {
    // ALL_CLEARアクションが呼ばれたらステートを全部消す
    if (action.type === ALL_CLEAR) {
      return rootReducer(undefined, action)
    }
    return rootReducer(state, action)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // TODO: createdAtを直した時に直す
      serializableCheck: false
    }).concat([
      baseFirestoreApi.middleware,
      baseStorageApi.middleware,
      errorHandler
    ])
})

setupListeners(store.dispatch)
