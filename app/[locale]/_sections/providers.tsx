'use client';

import { store } from '@/store';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

export default function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <HMSRoomProvider>
      <Provider store={store}>
        <NextUIProvider navigate={router.push} validationBehavior="native">
          <ToastContainer />
          {children}
        </NextUIProvider>
      </Provider>
    </HMSRoomProvider>
  );
}
