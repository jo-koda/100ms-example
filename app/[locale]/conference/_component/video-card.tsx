'use client';

import { HMSPeer, useVideo } from '@100mslive/react-sdk';
import { Card, CardHeader, CardBody } from '@nextui-org/react';

export default function VideoCard({ peer }: { peer: HMSPeer }) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  });

  return (
    <div>
      <video ref={videoRef} autoPlay muted playsInline />
      <div className="peer-name">
        {peer.name} {peer.isLocal ? '(You)' : ''}
      </div>
    </div>
  );
}
