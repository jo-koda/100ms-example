'use client';

import { useAppDispatch } from '@/hooks/hooks';
import { ReactNode, useEffect } from 'react';
import { roomsActions } from '../_redux/rooms-slice';

export default function Providers({
  children,
  rooms,
}: {
  children: ReactNode;
  rooms: any;
}) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (rooms) {
      dispatch(roomsActions.roomsLoaded(rooms));
    }
  }, [rooms, dispatch]);
  return <div>{children}</div>;
}
