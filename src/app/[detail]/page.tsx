import { Metadata } from 'next';
import Image from 'next/image';

import TopBanner from './TopBanner';
import Header from './Header';
import Footer from './Footer';
import ResultsDisplay from './ResultsDisplay';
import ResultsTable from './ResultsTable';

export const metadata: Metadata = {
  title: '구매복권 당첨결과',
};

type ReduceRetrunType = {
  draw: number;
  userPicks: number[][];
};

interface Props {
  searchParams: { [data: string]: string };
}

export default function DetailPage({ searchParams }: Props) {
  // const { selectedRank } = useAppSelector((state) => state.lotto);

  const results = searchParams.data.match(/\d+/g) ?? null;
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
    const randomNum = Math.floor(Math.random() * nums.length);
    const shuffle = (array: number[]) => {
      const newArray = [...array];
      return newArray.sort(() => Math.random() - 0.5);
    };
    const shuffledNums = shuffle(nums[randomNum]);
    return fillRandomNumbers(shuffledNums, targetRank);
  };

  const fillRandomNumbers = (nums: number[], targetRank: Rank) => {
    const calculateNum = (num: Rank) => {
      const results = [0, 0, 1, 2];
      return results[num - 1];
    };
    const results = nums.slice(calculateNum(targetRank));
    while (results.length !== 7) {
      const random = Math.ceil(Math.random() * 45);
      if (!results.includes(random))
        targetRank === 2 ? results.unshift(random) : results.push(random);
    }
    return results;
  };
  const winningNumbers = getWinningNumbers(userPicks, 1);

  return (
    <>
      <Header />
      <section className="pb-[26px] pt-[114px]">
        <div className="fixed top-[63px] z-50 flex h-[51px]  w-screen max-w-full items-center justify-center bg-[#007bc3] text-[17px] font-medium text-white">
          구매복권 당첨결과
        </div>
        <TopBanner />
        <ResultsDisplay winningNumbers={winningNumbers} />
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
        <button
          type="button"
          className="flex w-screen max-w-full items-center bg-[#f5f5f5] px-[33px] py-[17px]"
        >
          <Image
            src="/images/img_app.png"
            width={53}
            height={53}
            alt="img_app"
          />
          <div className="pl-[19px] text-left text-[11px] font-medium text-[#444]">
            <p>동행복권 앱 다운받고</p>
            <p>복권정보와 다양한 알림서비스를 받아보세요.</p>
          </div>
        </button>
      </section>
      <Footer />
    </>
  );
}
