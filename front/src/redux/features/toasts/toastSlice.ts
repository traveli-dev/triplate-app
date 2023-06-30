import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'

export type ToastType = {
  visible: boolean
  type: 'error' | 'success'
  message: string
}

const initialState: ToastType = {
  visible: false,
  type: 'success',
  message: ''
}

const toastSlice = createSlice({
  name: 'toast',
  initialState: initialState,
  reducers: {
    showToast(state, action) {
      state.visible = true
      state.type = action.payload.type
      state.message = action.payload.message
    },
    hideToast(state) {
      state.visible = false
    }
  }
})

export const { showToast, hideToast } = toastSlice.actions

const stateSelector = (state: RootState) => state.toast

export const toastSelectors = {
  toast: createSelector(stateSelector, (state) => state)
}

export const toastReducer = toastSlice.reducer
