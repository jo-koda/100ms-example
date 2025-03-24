'use client'

import { HMSPeer, useVideo } from '@100mslive/react-sdk'
import { Card, CardHeader, CardBody } from '@nextui-org/react'
import { useState } from 'react'
import { FiMic, FiMicOff } from 'react-icons/fi'

export default function SubVideoCard({ peer }: { peer: HMSPeer }) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  })
  const [micOn, setMicOn] = useState(true)

  const toggleMic = () => setMicOn((prev) => !prev)
  return (
    <div className='relative flex max-h-[200px] min-h-[150px] w-full min-w-[250px] max-w-[300px]'>
      <video
        className='h-full w-full object-cover'
        ref={videoRef}
        autoPlay
        muted
        playsInline
      />
      <div className='peer-name absolute bottom-2 left-2 rounded-full bg-gray-500/70 px-3 py-1 text-sm text-white'>
        {peer.name} {peer.isLocal ? '(You)' : ''}
      </div>
      <div
        className='absolute right-2 top-2 cursor-pointer rounded-full bg-gray-500/70 p-2 text-white'
        onClick={toggleMic}
      >
        {micOn ? <FiMic /> : <FiMicOff />}
      </div>
    </div>
  )
}
