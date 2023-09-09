import { getBgClassName } from './ResultsDisplay';

interface Props {
  numbers: number[];
  index: number;
  winningNumbers: number[];
}

const ALPHABET = 'ABCDE';

export default function ResultsTable({
  numbers,
  index,
  winningNumbers,
}: Props) {
  const checkLottoResult = (numbers: number[], winingNumbers: number[]) => {
    let rank = 0;
    const matchedNumbers = winningNumbers.filter((winNum) =>
      numbers.find((n) => n === winNum),
    );
    const length = matchedNumbers.length;
    const hasBonusNum = matchedNumbers.includes(winingNumbers[6]);

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
    return `${rank ? `${rank}등당첨` : '낙첨'}`;
  };

  return (
    <tr className="w-full">
      <th className="box-content w-1/12 border border-[#dbdbdb] bg-[#f7f7f7] text-[#444]">
        {ALPHABET[index]}
      </th>
      <td className="box-content w-2/12 border border-[#dbdbdb] text-center text-[#666]">
        {checkLottoResult(numbers, winningNumbers)}
      </td>
      <td className="box-content min-w-full border border-[#dbdbdb]">
        <ul className="flex items-center justify-center gap-[3px] py-[6px]">
          {numbers.map((n) => {
            const isWin = winningNumbers.includes(n);
            const bg = getBgClassName(n);
            return (
              <li
                className={`h-[30px] w-[30px] rounded-full text-center text-xs font-bold leading-[30px] text-[#444] ${
                  isWin ? `${bg} text-white` : ''
                }`}
                key={n}
              >
                {n}
              </li>
            );
          })}
        </ul>
      </td>
    </tr>
  );
}
