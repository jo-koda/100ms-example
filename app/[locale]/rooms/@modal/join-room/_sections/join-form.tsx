'use client';

import { Input, Button, Card, CardHeader, CardBody } from '@nextui-org/react';
import { useHMSActions } from '@100mslive/react-sdk';
import { useAppSelector } from '@/hooks/hooks';
import { useRouter } from 'next/navigation';

export default function JoinForm() {
  const state = useAppSelector((state) => state.joinRoomState);
  const hmsActions = useHMSActions();
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const roomCode = formData.get('roomCode')?.toString() ?? '';
    const userName = formData.get('name')?.toString() ?? '';
    // use room code to fetch auth token

    try {
      const authToken = await hmsActions.getAuthTokenByRoomCode({ roomCode });
      const joinStatus = await hmsActions.join({ userName, authToken });
      // const joinStatus = await hmsActions.leave();
      router.push('/en/conference');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form action={handleSubmit} className="flex max-w-sm flex-col gap-4">
      <div>
        <Input
          required
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
        />
      </div>
      <div>
        <Input
          id="room-code"
          type="text"
          name="roomCode"
          placeholder="Room code"
          value={state.roomId}
          isReadOnly
        />
      </div>
      <Button type="submit">Join</Button>
    </form>
  );
}
