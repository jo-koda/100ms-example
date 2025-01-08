'use server';

import { Room } from '@/models/room';
import { RoomCode } from '@/models/room-code';
import { index, indexCodes, store, storeCode } from '@/services/room-services';
import camelize from 'camelize';
import { revalidateTag } from 'next/cache';

export async function storeRoom({
  name,
  description,
}: {
  name?: string;
  description?: string;
}) {
  try {
    let result = await store({
      name: name,
      description: description,
    });
    if (result.ok) {
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function indexRooms() {
  try {
    revalidateTag('rooms');
    let result = await index();
    console.log('hEY: ', result.ok);
    if (result.ok) {
      return camelize(await result.json()).data as Room[];
    }
  } catch (error) {
    console.error(error);
  }
}

export async function indexRoomCode({ roomId }: { roomId: string }) {
  try {
    revalidateTag('codes');
    let result = await indexCodes({ roomId: roomId });
    if (result.ok) {
      return camelize(await result.json()).data as RoomCode[];
    }
  } catch (error) {
    console.error(error);
  }
}

export async function storeRoomCode({ roomId }: { roomId: string }) {
  try {
    let result = await storeCode({ roomId: roomId });
    if (result.ok) {
      return camelize(await result.json()).data as RoomCode[];
    }
  } catch (error) {
    console.error(error);
  }
}
