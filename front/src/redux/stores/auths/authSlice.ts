import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootStore'

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

const stateSelector = (state: RootState) => state.auth

export const authSelectors = {
  currentUserUid: createSelector(stateSelector, (state) => state.uid)
}

export const authReducer = authSlice.reducer
