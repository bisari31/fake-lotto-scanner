import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import { Providers } from '@/redux/providers';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: '로또 당첨 조회',
  description: '가짜 로또 1등 당첨 앱',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="ko">
        <body className={`${notoSans.className} tracking-[-0.2px]`}>
          {children}
        </body>
      </html>
    </Providers>
  );
}
