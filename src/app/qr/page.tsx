'use client';

import { useRouter } from 'next/navigation';
import QrScanner from 'qr-scanner';
import { useEffect, useRef } from 'react';

export default function QrPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    const videoElem = videoRef.current;
    let qrScanner;
    if (videoElem) {
      qrScanner = new QrScanner(
        videoElem,
        (qrcode) => {
          const url = qrcode.data.startsWith('http://m.dhlottery.co.kr/?v=');
          router.push(url ? `/detail?data=${qrcode.data}` : '/detail?error');
        },
        {
          preferredCamera: 'environment',
        },
      );
    }

    if (qrScanner) qrScanner.start();
  }, [router]);

  return (
    <div className="flex min-h-screen justify-center bg-black">
      <video src="" className="h-full" ref={videoRef}></video>
    </div>
  );
}
