import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import QueryClientProviders from '@/utils/QueryClientProviders';
import { ReduxProviders } from '@/redux/ReduxProviders';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: '로또 당첨 조회',
  description: '가짜 로또 1등 당첨 앱',
  verification: {
    google: 'e-TNPhd8w4G89P7qHvpbNUMOzmwlO8jX-6zAin2jbK8',
    other: {
      'naver-site-verification': 'fb43b2b0ff24ab6bdcbb4b129045a18a86f4ce06',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSans.className} tracking-[-0.2px]`}>
        <ReduxProviders>
          <QueryClientProviders>{children}</QueryClientProviders>
        </ReduxProviders>
      </body>
    </html>
  );
}
