import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface Props {
  imageSrc: string;
  alt: string;
  size: number;
}

export default function FooterHelp({
  imageSrc,
  alt,
  size,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-[#252525]">
      <div className="flex items-center justify-center">
        <Image src={imageSrc} width={size} height={size} alt={alt} />
        <span className="pl-2 text-xs font-bold">
          <strong>{alt}</strong>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-[5px] pt-3 text-[10px] font-medium leading-[10px]">
        {children}
      </div>
    </div>
  );
}
