import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { baseFirestoreApi } from '@/redux/services/firestore/baseFirestoreApi'
import { authReducer, mapReducer } from '@/redux/stores'

export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

export const useAppDispath = () => useDispatch<DispatchType>()
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector

export const reducers = combineReducers({
  auth: authReducer,
  map: mapReducer,
  [baseFirestoreApi.reducerPath]: baseFirestoreApi.reducer
})

export const store = configureStore({
  reducer: {
    auth: authReducer,
    map: mapReducer,
    [baseFirestoreApi.reducerPath]: baseFirestoreApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseFirestoreApi.middleware)
})
