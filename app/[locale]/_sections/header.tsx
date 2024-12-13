'use client'

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import { useSelectedLayoutSegment } from 'next/navigation'
import { IoMdArrowDropdown, IoMdNotifications } from 'react-icons/io'

export default function Header() {
  const segment = useSelectedLayoutSegment()
  return (
    <div
      className={
        segment == 'auth' ? 'hidden' : `flex w-full items-center justify-end`
      }
    >
      <div className='flex items-center gap-2'>
        Hi, John
        <Dropdown>
          <DropdownTrigger>
            <Button
              className='border-0'
              endContent={<IoMdArrowDropdown />}
              variant='bordered'
            >
              <Avatar
                src='https://i.pravatar.cc/150?u=a04258a2462d826712d'
                size='sm'
              />
            </Button>
          </DropdownTrigger>
          <DropdownMenu selectionMode='single'>
            <DropdownItem key='statistic'>Statistic</DropdownItem>
            <DropdownItem key='example'>Example</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}
