import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { StateType } from '@/redux/rootStore'

export type CenterAddressType = {
  name: string | null
  address: string | null
  location: {
    lat: number
    lng: number
  }
}

const initialState: CenterAddressType = {
  name: null,
  address: null,
  location: { lat: 35.68123620000001, lng: 139.7671248 }
}

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCenterAddress: (
      state,
      action: PayloadAction<CenterAddressType | null>
    ) => {
      if (action.payload) {
        return Object.assign({}, state, action.payload)
      } else {
        return Object.assign({}, state, initialState)
      }
    }
  }
})

export const { setCenterAddress } = mapSlice.actions

const stateSelector = (state: StateType) => state.map

export const mapSelectors = {
  currentCenter: createSelector(stateSelector, (state) => state)
}

export const mapReducer = mapSlice.reducer
