import Link from 'next/link';
import FooterHelp from './FooterHelp';

export default function Footer() {
  return (
    <footer className="border-t border-[#dcdcdc] pb-[23px] pt-4">
      <div>
        <div className="flex items-center justify-center">
          <FooterHelp
            size={16}
            alt="1588-6450"
            imageSrc="/images/bg_contact2.png"
          >
            <p>월-금, 일요일 : 06:00 - 24:00</p>
            <p>토요일 : 06:00 - 21:00</p>
          </FooterHelp>
          <FooterHelp
            size={12}
            alt="1대1 상담"
            imageSrc="/images/bg_contact3.png"
          >
            <p>월-금요일 : 09:00 - 18:00</p>
            <p>토,일 및 법정공휴일 휴무</p>
          </FooterHelp>
        </div>
      </div>
      <div className="flex justify-center pt-[15px] text-[10px]">
        <Link
          className="mx-[2px] box-content inline-block h-[25px] w-[82px] border border-[#ddd] px-[10px] text-center leading-[25px]"
          href="https://m.dhlottery.co.kr/user.do?method=loginm"
        >
          로그인
        </Link>
        <Link
          className="mx-[2px] box-content inline-block h-[25px] w-[82px] border border-[#ddd] px-[10px] text-center leading-[25px]"
          href="https://m.dhlottery.co.kr/counsel.do?method=callCenter"
        >
          고객센터
        </Link>
      </div>
      <ul className="flex items-center justify-center pt-[13px] text-[11px] text-[#767676]">
        <li>
          <strong className="font-bold">
            <Link href="https://m.dhlottery.co.kr/clause.do?method=footerPrivate">
              개인정보처리방침
            </Link>
          </strong>
        </li>
        <li className="footer_before relative ml-3">
          <Link href="https://m.dhlottery.co.kr/clause.do?method=mobileUseClause">
            이용약관
          </Link>
        </li>
      </ul>
    </footer>
  );
}
