import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { baseFirestoreApi } from '@/redux/services/firestore/baseFirestoreApi'
import { authReducer, mapReducer } from '@/redux/stores'

export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

export const useAppDispath = () => useDispatch<DispatchType>()
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector

const rootReducer = combineReducers({
  auth: authReducer,
  map: mapReducer,
  [baseFirestoreApi.reducerPath]: baseFirestoreApi.reducer
})

export const store = configureStore({
  reducer: (state, action) => {
    return rootReducer(state, action)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseFirestoreApi.middleware)
})
