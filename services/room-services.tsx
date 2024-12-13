export function store({
  name,
  description,
}: {
  name?: string;
  description?: string;
}) {
  return fetch(`https://api.100ms.live/v2/rooms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
    },

    body: JSON.stringify({
      name: name,
      description: description,
      template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '',
    }),
  });
}

export function index() {
  return fetch(`https://api.100ms.live/v2/rooms`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
    },
    next: { tags: ['rooms'] },
  });
}

export function indexCodes({ roomId }: { roomId?: string }) {
  return fetch(`https://api.100ms.live/v2/room-codes/room/${roomId ?? ''}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
    },
    next: { tags: ['codes'] },
  });
}

export function storeCode({ roomId }: { roomId?: string }) {
  return fetch(`https://api.100ms.live/v2/room-codes/room/${roomId ?? ''}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
    },
  });
}
