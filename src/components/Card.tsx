'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { ThumbnailSlideshow } from '@/components/ThumbnailSlideshow';
import { trpcApiBoilerplateClient } from '@/trpc-apis';
import type {
  TextByCityKey,
  TextByRestoCategoryKey,
} from '@/utils/TextHelpers';
import { TextByCity, textByRestoCategory } from '@/utils/TextHelpers';

type ICardProps = {
  id: string;
  images: string[];
  isFavorite: boolean;
  featured?: { text: string; icon: string };
  name: string;
  rating: number;
  ratingCount: bigint;
  desc: string;
  category: string;
  priceRange: string;
  city: string;
};

const Card = (props: ICardProps) => {
  const { mutate } = trpcApiBoilerplateClient.addFavorite.useMutation();

  const [isMarkedFavorite, setIsMarkedFavorite] = useState(props.isFavorite);

  const handleClick = () => {
    mutate({ id: props.id, patch: { isFavorite: !isMarkedFavorite } });
    setIsMarkedFavorite(!isMarkedFavorite);
  };

  return (
    <div className="mb-4">
      <div className="relative h-52 w-full">
        {props.images.length === 1 ? (
          <Image
            src={
              props.images.length > 0
                ? (props.images[0] as string)
                : '/assets/images/placeholder-resto.png'
            }
            alt="Resto Thumbnail Image"
            className="rounded-lg object-cover"
            sizes="100vw"
            fill
            priority
          />
        ) : (
          <ThumbnailSlideshow slideContents={props.images} />
        )}
        <button
          type="button"
          aria-label="mark favorite"
          className="absolute right-2 top-2 z-[9998] rounded-full bg-white/25 p-2 shadow-md"
          onClick={handleClick}
        >
          <svg
            className="size-6 text-white"
            fill={isMarkedFavorite ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        {props.featured && (
          <div className="flex items-center text-sm text-orange-500">
            <Image
              src={`/assets/images/icons/${props.featured?.icon}.svg`}
              alt="Star Icon"
              width={12}
              height={12}
              className="mr-1"
            />
            {props.featured?.text}
          </div>
        )}
        <div className="flex flex-row items-center justify-between">
          <h3 className="truncate text-lg font-semibold text-zinc-900">
            {props.name}
          </h3>
          <div className="flex items-center gap-0.5 text-sm text-zinc-600">
            <svg
              className="size-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            {`${props.rating}(${props.ratingCount})`}
          </div>
        </div>
        <p className="truncate text-sm text-zinc-600 dark:text-zinc-400">
          {props.desc}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {`${TextByCity[props.city as TextByCityKey]} 나카노시마 · ${textByRestoCategory[props.category as TextByRestoCategoryKey]} · ${props.priceRange}만원`}
        </p>
      </div>
    </div>
  );
};

export { Card };
