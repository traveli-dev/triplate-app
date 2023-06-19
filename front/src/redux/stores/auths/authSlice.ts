import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootStore'

export type AuthType = {
  uid: string | null
  icon: string | null
}

const initialState: AuthType = {
  uid: null,
  icon: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthType>) => {
      state.uid = action.payload.uid
      state.icon = action.payload.icon
    }
  }
})

export const { setUser } = authSlice.actions

const stateSelector = (state: RootState) => state.auth

export const authSelectors = {
  currentUid: createSelector(stateSelector, (state) => state.uid),
  currentAuthUser: createSelector(stateSelector, (state) => state)
}

export const authReducer = authSlice.reducer
