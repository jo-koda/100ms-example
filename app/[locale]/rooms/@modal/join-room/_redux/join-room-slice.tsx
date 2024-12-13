import { Room } from '@/models/room';
import { JoinRoomState } from './join-room-state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: JoinRoomState = {};

export const joinRoomSlice = createSlice({
  name: 'joinRoomSlice',
  initialState,
  reducers: {
    roomIdLoaded(state: JoinRoomState, action: PayloadAction<string>) {
      return {
        ...state,
        roomId: action.payload,
      };
    },
  },
});

export const joinRoomActions = joinRoomSlice.actions;

export default joinRoomSlice.reducer;
