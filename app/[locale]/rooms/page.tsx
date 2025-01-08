import Providers from './_sections/provider';
import Header from './_sections/header';
import { indexRooms } from '@/actions/room-actions';
import RoomTable from './_sections/room-table';

export default async function Page() {
  const rooms = await indexRooms();

  return (
    <Providers rooms={rooms}>
      <div className="flex h-full flex-col gap-4">
        <Header />
        <RoomTable />
      </div>
    </Providers>
  );
}
