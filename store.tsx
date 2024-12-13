import { configureStore } from '@reduxjs/toolkit';
import rootSlice from './app/[locale]/_redux/root-slice';
import roomsSlice from './app/[locale]/rooms/_redux/rooms-slice';
import joinRoomSlice from './app/[locale]/rooms/@modal/join-room/_redux/join-room-slice';

export const store = configureStore({
  reducer: {
    rootState: rootSlice,
    roomsState: roomsSlice,
    joinRoomState: joinRoomSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;
export type RootState = ReturnType<typeof store.getState>;
