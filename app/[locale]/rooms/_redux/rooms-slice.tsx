import { Room } from '@/models/room';
import { RoomsState } from './rooms-state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: RoomsState = {};

export const roomsSlice = createSlice({
  name: 'roomsSlice',
  initialState,
  reducers: {
    roomsLoaded(state: RoomsState, action: PayloadAction<Room[]>) {
      return {
        ...state,
        rooms: action.payload,
      };
    },
  },
});

export const roomsActions = roomsSlice.actions;

export default roomsSlice.reducer;
