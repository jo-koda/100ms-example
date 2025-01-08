'use client'

import { selectPeers, useHMSStore } from '@100mslive/react-sdk'
import { Card, CardHeader, CardBody } from '@nextui-org/react'
import VideoCard from '../_component/video-card'
import { redirect } from 'next/navigation'
import SubVideoCard from '../_component/sub-video-card'

export default function ConferenceRoom() {
  const peers = useHMSStore(selectPeers)
  if (peers.length != 0) {
    return (
      <div className='flex w-full flex-col items-center gap-2 overflow-auto border border-green-500'>
        {peers.map((peer, index) => {
          if (index == 0) {
            return <VideoCard key={peer.id} peer={peer} />
          }
        })}
        <div className='min-h-10 max-w-screen-lg overflow-x-auto'>
          <div className='flex max-h-96 min-w-[150%] gap-4'>
            {[1, 2, 3, 4, 5, 6, 7, 9, 9, 10, 11, 12, 13, 14, 15].map(() => {
              return peers.map((peer, index) => {
                if (index != 0) {
                  return (
                    <SubVideoCard
                      key={`${peer.id}-${Math.random()}`}
                      peer={peer}
                    />
                  )
                }
              })
            })}
          </div>
        </div>
      </div>
    )
  } else {
    redirect('/en/rooms')
  }
}
