'use client';

import { RootState } from '@/store';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import { useSelectedLayoutSegment } from 'next/navigation';
import {
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiLogOut,
  FiUser,
  FiUsers,
} from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import { collapseToggled } from '../_redux/root-slice';
import SideBarNavButton from '../_components/side-bar-item';

export default function SideBar() {
  const segment = useSelectedLayoutSegment();
  const state = useSelector((state: RootState) => state.rootState);
  const dispatch = useDispatch();

  return (
    //used to have md:static and fixed
    <Card
      className={`flex h-screen md:static ${segment == 'auth' ? 'hidden' : ''} ${state.sideBarOpen ? 'min-w-full md:min-w-64' : 'min-w-20'} flex-col bg-[#0F4F79] md:min-w-64`}
      radius="none"
    >
      <CardHeader
        className={`flex h-24 flex-row-reverse md:h-fit ${!state.sideBarOpen && 'flex-col'} justify-center gap-2 font-bold`}
      >
        <div className="md:hidden">
          <Button
            isIconOnly
            variant="light"
            startContent={
              state.sideBarOpen ? (
                <FiChevronLeft size={24} />
              ) : (
                <FiChevronRight size={24} />
              )
            }
            onClick={() => dispatch(collapseToggled())}
          />
        </div>
        <div
          className={`grow px-8 pt-5 text-white ${state.sideBarOpen && 'p-4'}`}
        >
          Video Chat
        </div>
      </CardHeader>
      <CardBody className="flex grow flex-col items-center gap-2 px-0">
        <SideBarNavButton
          href="/en/rooms"
          name="ROOMS"
          icon={<FiUsers size={18} />}
        />
      </CardBody>
      <CardFooter className="flex flex-col gap-2">
        <Button
          className="w-full justify-start bg-transparent md:flex"
          // onClick={async () => await signOutUser()}
          startContent={<FiLogOut size={18} />}
          variant="flat"
        >
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
}
