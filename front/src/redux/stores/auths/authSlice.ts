import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { StateType } from '@/redux/rootStore'

export type AuthType = {
  uid: string | null
}

const initialState: AuthType = {
  uid: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthType>) => {
      state.uid = action.payload.uid
    }
  }
})

export const { setUser } = authSlice.actions

const stateSelector = (state: StateType) => state.auth

export const authSelectors = {
  currentUser: createSelector(stateSelector, (state) => state),
}

export const authReducer = authSlice.reducer
