'use client'

import { selectPeers, useHMSStore } from '@100mslive/react-sdk'
import { Card, CardHeader, CardBody } from '@nextui-org/react'
import VideoCard from '../_component/video-card'
import { redirect } from 'next/navigation'
import SubVideoCard from '../_component/sub-video-card'

export default function ConferenceRoom() {
  const peers = useHMSStore(selectPeers)
  console.log(peers)
  if (peers.length != 0) {
    return (
      <div className='flex w-full flex-col items-center gap-2 overflow-auto'>
        {peers.map((peer) => (
          <VideoCard key={peer.id} peer={peer} />
        ))}
        <div className='max-w-screen-lg overflow-x-auto'>
          <div className='flex min-w-[150%] gap-4 border'>
            {Array(6)
              .fill(null)
              .flatMap(() =>
                peers.map((peer) => (
                  <SubVideoCard
                    key={`${peer.id}-${Math.random()}`}
                    peer={peer}
                  />
                )),
              )}
          </div>
        </div>
      </div>
    )
  } else {
    redirect('/en/rooms')
  }
}
