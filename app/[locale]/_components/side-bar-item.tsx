'use client';

import { RootState } from '@/store';
import { Button, Link } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

export default function SideBarNavButton({
  href,
  name,
  icon,
}: {
  href: string;
  name: string;
  icon?: ReactNode;
}) {
  const state = useSelector((state: RootState) => state.rootState);
  const pathname = usePathname();

  return (
    <div className="w-full">
      <Button
        className={`${state.sideBarOpen ? 'flex' : 'hidden'} w-full justify-start rounded-none md:flex`}
        as={Link}
        href={href}
        variant={pathname.includes(href) ? 'solid' : 'light'}
        startContent={icon}
      >
        {name}
      </Button>
      {!state.sideBarOpen && (
        <Button
          as={Link}
          className="flex w-full md:hidden"
          href={href}
          isIconOnly
          variant={pathname.includes(href) ? 'solid' : 'light'}
          startContent={icon}
        >
          <div className={`md:flex ${state.sideBarOpen ? 'flex' : 'hidden'}`}>
            {name}
          </div>
        </Button>
      )}
    </div>
  );
}
