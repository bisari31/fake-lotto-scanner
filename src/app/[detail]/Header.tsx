import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed z-50 flex w-screen max-w-full justify-between bg-white">
      <button
        type="button"
        className="flex h-[63px] w-[53px] items-center justify-center"
      >
        <Image
          src="/images/bg_menu.png"
          alt="bg_menu"
          width={53 / 2.5}
          height={63 / 2.5}
        />
      </button>
      <Link
        className="flex items-center"
        href="https://m.dhlottery.co.kr/common.do?method=main"
      >
        <Image src="/images/logo.png" alt="logo" width={74} height={63} />
      </Link>
      <Link
        href="https://m.dhlottery.co.kr/user.do?method=loginm&returnUrl=https%3A%2F%2Fm.dhlottery.co.kr%2FuserSsl.do%3Fmethod%3DmyPage"
        className="flex h-[63px] w-[53px] items-center justify-center"
      >
        <Image
          src="/images/bg_mypage.png"
          alt="bg_mypage"
          width={53 / 2.5}
          height={63 / 2.5}
        />
      </Link>
    </header>
  );
}
