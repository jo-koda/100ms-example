'use client';

import { selectPeers, useHMSStore } from '@100mslive/react-sdk';
import { ReactNode, useEffect } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  const peers = useHMSStore(selectPeers);

  useEffect(() => {
    if (peers) {
      console.log('HEY:', peers);
    }
  }, [peers]);

  return <div>{children}</div>;
}
