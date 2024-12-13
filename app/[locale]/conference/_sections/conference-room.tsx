'use client';

import { selectPeers, useHMSStore } from '@100mslive/react-sdk';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import VideoCard from '../_component/video-card';
import { redirect } from 'next/navigation';

export default function ConferenceRoom() {
  const peers = useHMSStore(selectPeers);
  if (peers.length != 0) {
    return (
      <div className="grid w-full grid-cols-2 gap-2">
        {peers.map((peer) => (
          <VideoCard key={peer.id} peer={peer} />
        ))}
      </div>
    );
  } else {
    redirect('/en/rooms');
  }
}
