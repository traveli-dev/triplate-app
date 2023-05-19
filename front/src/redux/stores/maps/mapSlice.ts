import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { StateType } from '@/redux/rootStore'

export type CenterAddressType = {
  name: string
  address: string
  location: {
    lat: number
    lng: number
  }
}

const initialState: CenterAddressType = {
  name: '東京駅',
  address: '日本、〒100-0005 東京都千代田区丸の内１丁目９',
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
