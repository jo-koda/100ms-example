'use client';

import { Modal, ModalContent } from '@nextui-org/react';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode } from 'react';

export default function ModalContainer({ children }: { children: ReactNode }) {
  const router = useRouter();
  const selectedSegment = useSelectedLayoutSegment();
  return (
    <Modal
      isOpen
      size="md"
      placement="center"
      backdrop="blur"
      radius="sm"
      onClose={() => router.back()}
    >
      <ModalContent className={'w-full max-w-lg p-8'}>{children}</ModalContent>
    </Modal>
  );
}
