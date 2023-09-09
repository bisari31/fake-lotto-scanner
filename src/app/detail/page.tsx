'use client';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

import { getRandomInt } from '@/utils';
import { useAppSelector } from '@/hooks';

import Header from './Header';
import Footer from './Footer';
import TopBanner from './TopBanner';
import ResultsDisplay from './ResultsDisplay';

const ResultsTable = dynamic(() => import('./ResultsTable'), {
  ssr: false,
});

type ReduceRetrunType = {
  draw: number;
  userPicks: number[][];
};
export default function DetailPage() {
  const { selectedRank } = useAppSelector((state) => state.lotto);
  const searchParams = useSearchParams();
  const results = searchParams.get('data')?.match(/\d+/g) ?? null;

  if (!results) throw new Error('data is invalid');

  const { draw, userPicks } = results.reduce<ReduceRetrunType>(
    (acc, cur, idx) => {
      if (!idx) {
        acc.draw = +cur;
      } else {
        let newNums = '';
        if (results.length === idx + 1) {
          newNums = cur.slice(0, 12);
        }
        const target = newNums || cur;
        let newArr = [];
        for (let i = 0; i < target.length; i += 2) {
          const chunk = target.slice(i, i + 2);
          newArr.push(+chunk);
        }
        acc.userPicks.push(newArr);
      }
      return acc;
    },
    { draw: 0, userPicks: [] },
  );

  const getWinningNumbers = (nums: number[][], targetRank: Rank) => {
    const randomNum = getRandomInt(0, nums.length - 1);
    const calculateNum = (num: Rank) => {
      const results = [0, 0, 1, 2];
      return results[num - 1];
    };
    const winningNums = nums[randomNum].slice(calculateNum(targetRank));
    while (winningNums.length !== 7) {
      const random = getRandomInt(1, 45);
      if (!winningNums.includes(random))
        targetRank === 2
          ? winningNums.unshift(random)
          : winningNums.push(random);
    }
    const bonusNum = winningNums.pop() as number;
    return [...winningNums.sort((a, b) => a - b), bonusNum];
  };

  const winningNumbers = getWinningNumbers(userPicks, selectedRank);

  const getTotalPrize = (picks: number[][], winningNum: number[]) => {
    const prizes = [2672689750, 46616682, 1289494, 50000, 5000];

    const totalPize = picks.reduce((acc, cur) => {
      const matched = cur.filter((n) => winningNum.includes(n));
      const length = matched.length;
      const hasBonusNum = matched.includes(winningNum[6]);
      let rank = 0;
      if (length === 6) {
        rank = !hasBonusNum ? 1 : 2;
      } else if (length === 5 && !hasBonusNum) {
        rank = 3;
      } else if (length === 4 && !hasBonusNum) {
        rank = 4;
      } else if (length === 3 && !hasBonusNum) {
        rank = 5;
      } else {
        rank = 0;
      }
      return (acc += rank ? prizes[rank - 1] : 0);
    }, 0);
    return totalPize;
  };
  const totalPrize = getTotalPrize(userPicks, winningNumbers);
  return (
    <>
      <Header />
      <section className="pb-[26px] pt-[114px]">
        <div className="fixed top-[63px] z-50 flex h-[51px]  w-screen max-w-full items-center justify-center bg-[#007bc3] text-[17px] font-medium text-white">
          구매복권 당첨결과
        </div>
        <TopBanner />
        <ResultsDisplay
          totalPrize={totalPrize}
          draw={draw}
          winningNumbers={winningNumbers}
        />
        <div className="p-[17px]">
          <div className="pb-[13px]">
            <table className="w-full border border-[#dbdbdb] text-[11px]">
              <tbody className="">
                {userPicks.map((array, idx) => (
                  <ResultsTable
                    winningNumbers={winningNumbers}
                    index={idx}
                    numbers={array}
                    key={idx}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] font-medium text-[#666]">
            - QR 당첨확인은 보조 확인수단이므로 반드시 실물과 대조하시기 바라며,
            당첨금은 실물 복권소지자에게 지급합니다.
          </p>
        </div>
        <div className="flex w-screen max-w-full items-center bg-[#f5f5f5] px-[33px] py-[17px]">
          <Image
            src="/images/img_app.png"
            width={53}
            height={53}
            alt="img_app"
          />
          <div className="pl-[19px] text-left text-[11px] font-medium text-[#444]">
            <p>
              동행복권 앱 다운받고
              <br />
              복권정보와 다양한 알림서비스를 받아보세요.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
