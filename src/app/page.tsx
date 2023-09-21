'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import SettingModal from './SettingModal';

export default function Home() {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-main flex min-h-screen  justify-center">
      <div className="flex w-full max-w-md flex-col justify-center">
        <div className="relative flex animate-upDown justify-center">
          <Image
            src="/images/main-title.png"
            alt="title"
            width={348}
            height={0}
          />
        </div>
        <div className="mt-40 flex flex-col items-center gap-y-8 text-xl text-[#a56604]">
          <button
            className="bg-button w-36 rounded-full p-3 font-black shadow-xl"
            type="button"
            onClick={() => router.push('/qr')}
          >
            QR스캔
          </button>
          <button
            className="bg-button w-36 rounded-full p-3 font-black shadow-xl"
            type="button"
            onClick={() =>
              router.push(
                '/detail?data=http://m.dhlottery.co.kr/?v=0868m041120213645m010306132438m142933354042m021823262731m1217284143441293818248',
              )
            }
          >
            테스트
          </button>
          <button
            className="bg-button w-36 rounded-full p-3  font-black shadow-xl "
            type="button"
            onClick={() => setIsSettingOpen(true)}
          >
            환경설정
          </button>
        </div>
        {isSettingOpen && <SettingModal setIsSettingOpen={setIsSettingOpen} />}
      </div>
    </div>
  );
}
