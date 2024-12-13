'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Switch,
  Input,
} from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import Link from 'next/link';

export default function RoomTable() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.roomsState);
  const columns = [
    {
      key: 'name',
      label: 'NAME',
    },
    {
      key: 'roomId',
      label: 'ROOM ID',
    },
    {
      key: 'templateId',
      label: 'TEMPLATE ID',
    },
  ];

  return (
    <div>
      <Table aria-label="Users Table" className="text-center">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              className="bg-slate-300 text-center text-black"
              key={column.key || 0}
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={'No rooms found'}
          items={state.rooms?.filter((room) => room.enabled) ?? []}
        >
          {(item) => (
            <TableRow
              as={Link}
              href={`/en/rooms/join-room?roomId=${item.id}`}
              className="cursor-pointer justify-center bg-transparent p-4 hover:bg-[#2D353C] hover:!text-white hover:shadow-md"
              key={item.id}
            >
              {(columnKey) => (
                <TableCell>
                  {{
                    key: item.id,
                    name: item.name,
                    roomId: item.id,
                    templateId: item.templateId,
                  }[columnKey] || getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
