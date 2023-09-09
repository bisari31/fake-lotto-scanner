'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function error() {
  return (
    <>
      <header className="h-[51px] w-screen bg-[#007bc3] text-center text-[17px] font-medium leading-[51px] text-white">
        안내
      </header>
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center pt-[50px] text-[#666]">
          <p className="flex flex-col items-center">
            <Image
              className="mb-2"
              src="/images/bg_nodata.png"
              alt="no data"
              width={34}
              height={34}
            />
            <span className="text-sm font-bold">
              일시적 오류가 발생했습니다.
            </span>
          </p>
          <p className="mt-[13px] text-center text-[13px]">
            서비스 이용에 불편을 드려 죄송합니다.
            <br />
            찾으시려는 웹페이지의 이름이 바뀌었거나
            <br />
            일시적인 시스템 오류로 인해 페이지를 불러올 수 없습니다.
            <br />
            잠시 후 다시 시도해주세요.
          </p>
        </div>
        <Link
          href="/"
          className="mt-[30px] box-content inline-block h-[43px] w-[116px] bg-[#007bc3] px-5 text-center text-[13px] leading-[43px] text-white"
        >
          메인으로
        </Link>
      </section>
    </>
  );
}
