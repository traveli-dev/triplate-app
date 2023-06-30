import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

export type ErrorType = {
  code: string | null
  message: string | null
}

const initialState: ErrorType = {
  code: null,
  message: null
}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<ErrorType>) => {
      state.code = action.payload.code
      state.message = action.payload.message
    },
    clearError: () => initialState
  }
})

export const { setError, clearError } = errorSlice.actions

const stateSelector = (state: RootState) => state.error

export const errorSelectors = {
  error: createSelector(stateSelector, (state) => state)
}

export const errorReducer = errorSlice.reducer
