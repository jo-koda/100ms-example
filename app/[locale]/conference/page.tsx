import ConferenceRoom from './_sections/conference-room'
import Providers from './_sections/provider'
import Header from './_sections/header'
import ChatTable from '../_components/chat-table'

export default async function Page() {
  return (
    <Providers>
      <div className='flex w-full justify-between'>
        <div className='flex h-full flex-col'>
          <Header />
          <ConferenceRoom />
        </div>
        <ChatTable />
      </div>
    </Providers>
  )
}
