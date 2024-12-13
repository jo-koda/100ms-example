'use client';

import { ReactNode, useEffect } from 'react';
import { joinRoomActions } from '../_redux/join-room-slice';
import { useAppDispatch } from '@/hooks/hooks';
import { indexRoomCode, storeRoomCode } from '@/actions/room-actions';

export default function Providers({
  children,
  roomId,
}: {
  children: ReactNode;
  roomId: string;
}) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getRoomCodes = async (roomId: string) => {
      const roomCodes = await indexRoomCode({ roomId: roomId });

      if (roomCodes?.length == 0) {
        const result = await storeRoomCode({ roomId: roomId });
        if (result) {
          const code = result.find((room) => room.role == 'host')?.code ?? '';
          dispatch(joinRoomActions.roomIdLoaded(code));
        }
      }
      if (roomCodes) {
        const code = roomCodes.find((room) => room.role == 'host')?.code ?? '';
        dispatch(joinRoomActions.roomIdLoaded(code));
      }
    };
    if (roomId) {
      getRoomCodes(roomId);
    }
  }, [roomId, dispatch]);
  return <div>{children}</div>;
}
