import { RootState } from './root-state'
import { createSlice } from '@reduxjs/toolkit'

export const initialState: RootState = {
  sideBarOpen: false,
}

export const rootSlice = createSlice({
  name: 'rootSlice',
  initialState,
  reducers: {
    collapseToggled(state: RootState) {
      return {
        ...state,
        sideBarOpen: !state.sideBarOpen,
      }
    },
  },
})

export const { collapseToggled } = rootSlice.actions

export default rootSlice.reducer
