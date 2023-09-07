interface Props {
  winningNumbers: number[];
}

export const getBgClassName = (num: number) => {
  if (num >= 1 && num <= 10) return 'bg-clr1';
  else if (num >= 11 && num <= 20) return 'bg-clr2';
  else if (num >= 21 && num <= 30) return 'bg-clr3';
  else if (num >= 31 && num <= 40) return 'bg-clr4';
  else if (num >= 41 && num <= 45) return 'bg-clr5';
  return '';
};

export default function ResultsDisplay({ winningNumbers }: Props) {
  return (
    <div className="bg-[#f7fbff] px-[17px] py-[22px] text-center">
      <div className="">
        <p className="pt-2 text-[17px] font-semibold">
          로또 6/45 <span className="text-[#007bc3]">제868회</span>
        </p>
        <p className="text-[11px] font-medium text-[#888]">2019-07-20 추첨</p>
      </div>
      <div className="mt-[22px] text-[13px]">
        <p className="font-medium">당첨번호</p>
        <div className="flex justify-center gap-[3px] pt-[13px] text-xs font-bold text-white">
          {winningNumbers.map((n, i) => {
            const bg = getBgClassName(n);
            return (
              <span
                key={n}
                className={`${
                  i === 6 ? 'winnerNum_before relative ml-[23px]' : ''
                } inline-block h-[30px] w-[30px] rounded-full leading-[30px] ${bg}`}
              >
                {n}
              </span>
            );
          })}
        </div>
      </div>
      <div className="mt-[22px] bg-white py-[22px] shadow-md">
        <p className="pb-[7px] text-sm">축하합니다!</p>
        <p className="text-[15px] font-bold">
          총 <span className="text-[#007bc3]">3,233,804,250원</span> 당첨
        </p>
      </div>
    </div>
  );
}
