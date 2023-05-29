import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { baseFirestoreApi } from '@/redux/services/firestore/baseFirestoreApi'
import { authReducer, mapReducer, currentUserReducers } from '@/redux/stores'

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispath = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const rootReducer = combineReducers({
  auth: authReducer,
  map: mapReducer,
  user: currentUserReducers,
  [baseFirestoreApi.reducerPath]: baseFirestoreApi.reducer
})

export const store = configureStore({
  reducer: (state, action) => {
    return rootReducer(state, action)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // TODO: createdAtを直した時に直す
      serializableCheck: false
    }).concat(baseFirestoreApi.middleware)
})

setupListeners(store.dispatch)
