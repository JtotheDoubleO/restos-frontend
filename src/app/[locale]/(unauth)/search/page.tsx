import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Card } from '@/components/Card';
import { InputField } from '@/components/InputField';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Search',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Search() {
  const t = useTranslations('Search');

  return (
    <>
      <InputField
        leftIconSrc="/assets/images/icons/search.svg"
        rightIconSrc=""
        placeholder={t('search_placeholder')}
      />
      <Card
        images={[
          '/assets/images/placeholder-resto.png',
          '/assets/images/placeholder-resto.png',
          '/assets/images/placeholder-resto.png',
        ]}
        isRecommended
        name="카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야"
        rating={4.2}
        ratingCount={139}
        desc="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는"
        city="Osaka"
        category="YAKITORI"
        priceRange="3~5"
      />
      <Card
        images={[
          '/assets/images/placeholder-resto.png',
          '/assets/images/placeholder-resto.png',
          '/assets/images/placeholder-resto.png',
        ]}
        isRecommended
        name="카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야"
        rating={4.2}
        ratingCount={139}
        desc="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는"
        city="Osaka"
        category="YAKITORI"
        priceRange="3~5"
      />
      <Card
        images={[
          '/assets/images/placeholder-resto.png',
          '/assets/images/placeholder-resto.png',
          '/assets/images/placeholder-resto.png',
        ]}
        isRecommended
        name="카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야"
        rating={4.2}
        ratingCount={139}
        desc="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는"
        city="Osaka"
        category="YAKITORI"
        priceRange="3~5"
      />
      <Card
        images={['/assets/images/placeholder-resto.png']}
        isRecommended
        name="카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야"
        rating={4.2}
        ratingCount={139}
        desc="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는"
        city="Osaka"
        category="YAKITORI"
        priceRange="3~5"
      />
      {/*  /!*<div className="mb-4">*!/ */}
      {/*  /!*  <div className="relative">*!/ */}
      {/*  /!*    <Image*!/ */}
      {/*  /!*      src="/assets/images/placeholder-resto.png"*!/ */}
      {/*  /!*      alt="Food Image 1"*!/ */}
      {/*  /!*      className="h-48 w-full rounded-lg object-cover"*!/ */}
      {/*  /!*      fill*!/ */}
      {/*  /!*    />*!/ */}
      {/*  /!*    <button*!/ */}
      {/*  /!*      type="button"*!/ */}
      {/*  /!*      className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-md dark:bg-zinc-800"*!/ */}
      {/*  /!*    >*!/ */}
      {/*  /!*      <svg*!/ */}
      {/*  /!*        className="size-6 text-zinc-500 dark:text-zinc-400"*!/ */}
      {/*  /!*        fill="currentColor"*!/ */}
      {/*  /!*        viewBox="0 0 24 24"*!/ */}
      {/*  /!*      >*!/ */}
      {/*  /!*        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />*!/ */}
      {/*  /!*      </svg>*!/ */}
      {/*  /!*    </button>*!/ */}
      {/*  /!*  </div>*!/ */}
      {/*  /!*  <div className="mt-2">*!/ */}
      {/*  /!*    <div className="flex items-center text-sm text-orange-500">*!/ */}
      {/*  /!*      <svg*!/ */}
      {/*  /!*        className="mr-1 size-4"*!/ */}
      {/*  /!*        fill="currentColor"*!/ */}
      {/*  /!*        viewBox="0 0 24 24"*!/ */}
      {/*  /!*      >*!/ */}
      {/*  /!*        <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1012 2zm0 2a8 8 0 110 16A8 8 0 0112 4z" />*!/ */}
      {/*  /!*      </svg>*!/ */}
      {/*  /!*      나카노시마×야키토리 상위 맛집*!/ */}
      {/*  /!*    </div>*!/ */}
      {/*  /!*    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">*!/ */}
      {/*  /!*      카구라자카 이시카와 스시하루 나카노시마 스...*!/ */}
      {/*  /!*    </h3>*!/ */}
      {/*  /!*    <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">*!/ */}
      {/*  /!*      <svg*!/ */}
      {/*  /!*        className="mr-1 size-4 text-yellow-500"*!/ */}
      {/*  /!*        fill="currentColor"*!/ */}
      {/*  /!*        viewBox="0 0 24 24"*!/ */}
      {/*  /!*      >*!/ */}
      {/*  /!*        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />*!/ */}
      {/*  /!*      </svg>*!/ */}
      {/*  /!*      4.8(2)*!/ */}
      {/*  /!*    </div>*!/ */}
      {/*  /!*    <p className="text-sm text-zinc-600 dark:text-zinc-400">*!/ */}
      {/*  /!*      최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수...*!/ */}
      {/*  /!*    </p>*!/ */}
      {/*  /!*    <p className="text-sm text-zinc-600 dark:text-zinc-400">*!/ */}
      {/*  /!*      오사카 나카노시마 · 야키토리 · 4~6만원*!/ */}
      {/*  /!*    </p>*!/ */}
      {/*  /!*  </div>*!/ */}
      {/*  /!*</div>*!/ */}
      {/*  */}
      {/*  /!*<div className="mb-4">*!/ */}
      {/*  /!*  <div className="relative">*!/ */}
      {/*  /!*    <Image*!/ */}
      {/*  /!*      src="/assets/images/placeholder-resto.png"*!/ */}
      {/*  /!*      alt="Food Image 2"*!/ */}
      {/*  /!*      className="h-48 w-full rounded-lg object-cover"*!/ */}
      {/*  /!*      fill*!/ */}
      {/*  /!*    />*!/ */}
      {/*  /!*    <button*!/ */}
      {/*  /!*      type="button"*!/ */}
      {/*  /!*      className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-md dark:bg-zinc-800"*!/ */}
      {/*  /!*    >*!/ */}
      {/*  /!*      <svg*!/ */}
      {/*  /!*        className="size-6 text-zinc-500 dark:text-zinc-400"*!/ */}
      {/*  /!*        fill="currentColor"*!/ */}
      {/*  /!*        viewBox="0 0 24 24"*!/ */}
      {/*  /!*      >*!/ */}
      {/*  /!*        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />*!/ */}
      {/*  /!*      </svg>*!/ */}
      {/*  /!*    </button>*!/ */}
      {/*  /!*  </div>*!/ */}
      {/*  /!*  <div className="mt-2">*!/ */}
      {/*  /!*    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">*!/ */}
      {/*  /!*      스시하루*!/ */}
      {/*  /!*    </h3>*!/ */}
      {/*  /!*    <p className="text-sm text-zinc-600 dark:text-zinc-400">*!/ */}
      {/*  /!*      오사카 나카노시마 · 야키토리*!/ */}
      {/*  /!*    </p>*!/ */}
      {/*  /!*    <div className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">*!/ */}
      {/*  /!*      <svg*!/ */}
      {/*  /!*        className="mr-1 size-4 text-yellow-500"*!/ */}
      {/*  /!*        fill="currentColor"*!/ */}
      {/*  /!*        viewBox="0 0 24 24"*!/ */}
      {/*  /!*      >*!/ */}
      {/*  /!*        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />*!/ */}
      {/*  /!*      </svg>*!/ */}
      {/*  /!*      -(0)*!/ */}
      {/*  /!*    </div>*!/ */}
      {/*  /!*  </div>*!/ */}
      {/*  /!*</div>*!/ */}
    </>
  );
}
