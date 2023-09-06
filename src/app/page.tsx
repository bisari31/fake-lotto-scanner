'use client';

import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [data, setData] = useState('');
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black">
      <QrReader
        videoContainerStyle={{ height: '100vh' }}
        constraints={{ facingMode: 'environment' }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result.toString());
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      {data && (
        <button
          onClick={() => router.push(`/detail?data=${data}`)}
          className="absolute bottom-10 left-1/2 flex w-10/12 -translate-x-1/2 items-center rounded-md bg-white p-3"
        >
          <div className="flex-1 text-left">
            <p className="font-bold">동행복권</p>
            <p>당첨 결과 확인하기</p>
            <p className="text-zinc-300">m.dhlottery.co.kr</p>
          </div>
          <div className="h-16 w-16 bg-zinc-300 p-4 text-3xl font-bold text-white">
            D
          </div>
        </button>
      )}
    </div>
  );
}
