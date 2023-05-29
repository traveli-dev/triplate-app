import { createSlice, createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootStore'
import { usersApi } from '@/redux/services/firestore/'

type CurrentUserType = {
  name: string
  icon: string | null
  userId: string
}

const initialState: CurrentUserType = {
  name: '',
  icon: null,
  userId: ''
}

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.getUser.matchFulfilled,
      (state, action) => {
        if (action.payload) {
          state.icon = action.payload.icon
          state.userId = action.payload.userId
          state.name = action.payload.name
        }
      }
    )
  }
})

const stateSelector = (state: RootState) => state.user

export const currentUserSelectors = {
  isRegisteredUser: createSelector(stateSelector, (state) => !!state),
  currentUserData: createSelector(stateSelector, (state) => state)
}

export const currentUserReducers = currentUserSlice.reducer
