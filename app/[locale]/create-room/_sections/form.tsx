'use client';

import { Input, Button, Card, CardHeader, CardBody } from '@nextui-org/react';
import { storeRoom } from '@/actions/room-actions';
import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    const name = formData.get('name');
    const description = formData.get('description');

    try {
      const response = await storeRoom({
        name: name?.toString(),
        description: description?.toString() ?? '',
      });
      if (response) {
        router.push('/en/rooms');
      }
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
          id="description"
          type="text"
          name="description"
          placeholder="description"
        />
      </div>
      <Button type="submit">Join</Button>
    </form>
  );
}
