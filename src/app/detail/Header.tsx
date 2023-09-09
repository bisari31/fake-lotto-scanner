import Image from 'next/image';
import Link from 'next/link';
import LeftChevron from 'public/images/left-chevron-svgrepo-com.svg';

export default function Header() {
  return (
    <header className="fixed z-50 flex w-screen max-w-full justify-between bg-white">
      <Link
        href="/"
        type="button"
        className="flex h-[63px] w-[53px] items-center justify-center"
      >
        <LeftChevron stroke="#353535" fill="#353535" width={22} height={22} />
      </Link>
      <button className="flex items-center">
        <Image src="/images/logo.png" alt="logo" width={74} height={63} />
      </button>
      <button className="flex h-[63px] w-[53px] items-center justify-center">
        <Image
          src="/images/bg_mypage.png"
          alt="bg_mypage"
          width={22}
          height={22}
        />
      </button>
    </header>
  );
}
