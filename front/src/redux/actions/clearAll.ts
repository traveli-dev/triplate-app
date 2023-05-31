import { createAction } from '@reduxjs/toolkit'

export const ALL_CLEAR = 'all/clear'
export const clearAll = createAction<void>(ALL_CLEAR)
