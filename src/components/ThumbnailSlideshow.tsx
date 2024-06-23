'use client';

import Image from 'next/image';
import React from 'react';
import { EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const pagination = {
  clickable: true,
  renderBullet(_index: number, className: string) {
    return `<span class="${className}"></span>`;
  },
};

const ThumbnailSlideshow = ({ slideContents }: { slideContents: string[] }) => (
  <Swiper
    modules={[Pagination, EffectFade]}
    pagination={pagination}
    loop
    effect="fade"
    onSlideChange={() => console.log(slideContents)}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {slideContents.map((contentImageUrl, index) => (
      <SwiperSlide key={index}>
        <Image
          src={
            contentImageUrl !== ''
              ? contentImageUrl
              : '/assets/images/placeholder-resto.png'
          }
          alt={`Resto Slideshow Image ${index + 1}`}
          className="rounded-lg"
          // sizes="100vw"
          fill
          priority={index === 0}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export { ThumbnailSlideshow };
