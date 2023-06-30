import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootStore'

export type ToastType = {
  visible: boolean
  type: string
  message: string
  timeoutId: number | null
}

const initialState: ToastType = {
  visible: false,
  type: '',
  message: '',
  timeoutId: null
}

const toastSlice = createSlice({
  name: 'toast',
  initialState: initialState,
  reducers: {
    showToast(state, action) {
      state.visible = true
      state.type = action.payload.type
      state.message = action.payload.message
      state.timeoutId = action.payload.timerId
    },
    hideToast(state) {
      state.visible = false
      state.type = ''
      state.message = ''
      state.timeoutId = null
    }
  }
})

export const { showToast, hideToast } = toastSlice.actions

const stateSelector = (state: RootState) => state.toast

export const toastSelectors = {
  currentCenter: createSelector(stateSelector, (state) => state)
}

export const toastReducer = toastSlice.reducer
