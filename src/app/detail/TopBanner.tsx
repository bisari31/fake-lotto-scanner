'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function TopBanner() {
  const [bannerOpened, setBannerOpened] = useState(false);
  const handleBannerToggle = () => setBannerOpened((prev) => !prev);

  return (
    <button type="button" onClick={handleBannerToggle}>
      <Image
        className=""
        alt="qr_m_banner_02"
        src={
          bannerOpened
            ? '/images/qr_m_banner_03.jpg'
            : '/images/qr_m_banner_02.jpg'
        }
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100vw', height: 'auto' }}
      />
    </button>
  );
}
