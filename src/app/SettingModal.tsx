import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect, useRef } from 'react';

import LeftChevron from 'public/images/left-chevron-svgrepo-com.svg';
import { updateRank } from '@/redux/slices/lottoSlice';

interface Props {
  setIsSettingOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SettingModal({ setIsSettingOpen }: Props) {
  const { selectedRank } = useAppSelector((state) => state.lotto);
  const previousRank = useRef(selectedRank);
  const dispatch = useAppDispatch();

  const handleRankChange = (action: 'increase' | 'decrease', num: number) => {
    if (
      (num === 1 && action === 'decrease') ||
      (num === 4 && action === 'increase')
    ) {
      return;
    }
    const currentNum = (action === 'increase' ? num + 1 : num - 1) as Rank;
    dispatch(updateRank(currentNum));
  };

  const handleModalClose = (action: 'confirm' | 'cancel', num: number) => {
    if (action === 'confirm') {
      localStorage.setItem('rank', num.toString());
      dispatch(updateRank(num as Rank));
    } else dispatch(updateRank(previousRank.current));
    setIsSettingOpen(false);
  };

  useEffect(() => {
    const rank = localStorage.getItem('rank');
    if (rank && [1, 2, 3, 4].includes(+rank))
      dispatch(updateRank(+rank as Rank));
  }, [dispatch]);

  return (
    <div className="absolute left-0 flex min-h-screen w-screen items-center justify-center bg-black/[.7]">
      <div className="flex w-3/4 max-w-sm flex-col items-center justify-center rounded-2xl bg-[#259bd1] py-14">
        <div className="mb-8  text-lg font-bold text-white">
          원하는 등수를 선택해주세요
        </div>
        <div className=" flex items-center">
          <button
            onClick={() => handleRankChange('decrease', selectedRank)}
            className=" bg-button rounded-full p-1"
          >
            <LeftChevron
              strokeWidth={1}
              stroke="#a86400"
              width={24}
              height={24}
              fill="#a86400"
            />
          </button>
          <span className="mx-6 inline-block rounded-full bg-white px-6 py-1 text-center text-xl font-black text-[#044356]">
            {selectedRank}
          </span>
          <button
            onClick={() => handleRankChange('increase', selectedRank)}
            className="bg-button rotate-180 rounded-full p-1"
          >
            <LeftChevron
              strokeWidth={1}
              stroke="#a86400"
              width={24}
              height={24}
              fill="#a86400"
            />
          </button>
        </div>
        <div className="mt-12 flex gap-7">
          <button
            className="bg-button rounded-2xl px-10 py-2 font-black shadow-xl"
            onClick={() => handleModalClose('confirm', selectedRank)}
          >
            저장
          </button>
          <button
            className="bg-button rounded-2xl px-10 py-2 font-black shadow-xl"
            onClick={() => handleModalClose('cancel', selectedRank)}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
