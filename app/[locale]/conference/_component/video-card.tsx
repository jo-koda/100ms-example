'use client'

import { HMSPeer, useVideo } from '@100mslive/react-sdk'
import { Card, CardHeader, CardBody } from '@nextui-org/react'

export default function VideoCard({ peer }: { peer: HMSPeer }) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  })

  return (
    <div className='relative max-h-[700px] min-h-[300px] min-w-[300px] max-w-screen-lg'>
      <video
        className='h-auto w-full'
        ref={videoRef}
        autoPlay
        muted
        playsInline
      />
      <div className='peer-name absolute left-2 top-2 rounded-full bg-black/70 px-4 py-2 text-sm text-white'>
        {peer.name} {peer.isLocal ? '(You)' : ''}
      </div>
    </div>
  )
}
