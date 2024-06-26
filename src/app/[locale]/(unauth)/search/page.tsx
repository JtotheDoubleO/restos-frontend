import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { CardList } from '@/components/CardList';
import { FilterTags } from '@/components/FilterTags';
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
      <FilterTags />
      <CardList />
      {/* <Card */}
      {/*  images={[ */}
      {/*    '/assets/images/placeholder-resto.png', */}
      {/*    '/assets/images/placeholder-resto.png', */}
      {/*    '/assets/images/placeholder-resto.png', */}
      {/*  ]} */}
      {/*  isRecommended */}
      {/*  isFavorite */}
      {/*  name="카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야" */}
      {/*  rating={4.2} */}
      {/*  ratingCount={139} */}
      {/*  desc="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는" */}
      {/*  city="Osaka" */}
      {/*  category="YAKITORI" */}
      {/*  priceRange="3~5" */}
      {/* /> */}
      {/* <Card */}
      {/*  images={[ */}
      {/*    '/assets/images/placeholder-resto.png', */}
      {/*    '/assets/images/placeholder-resto.png', */}
      {/*    '/assets/images/placeholder-resto.png', */}
      {/*  ]} */}
      {/*  isRecommended */}
      {/*  name="카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야" */}
      {/*  rating={4.2} */}
      {/*  ratingCount={139} */}
      {/*  desc="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는" */}
      {/*  city="Osaka" */}
      {/*  category="YAKITORI" */}
      {/*  priceRange="3~5" */}
      {/* /> */}
      {/* <Card */}
      {/*  images={[ */}
      {/*    '/assets/images/placeholder-resto.png', */}
      {/*    '/assets/images/placeholder-resto.png', */}
      {/*    '/assets/images/placeholder-resto.png', */}
      {/*  ]} */}
      {/*  isRecommended */}
      {/*  name="카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야" */}
      {/*  rating={4.2} */}
      {/*  ratingCount={139} */}
      {/*  desc="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는" */}
      {/*  city="Osaka" */}
      {/*  category="YAKITORI" */}
      {/*  priceRange="3~5" */}
      {/* /> */}
      {/* <Card */}
      {/*  images={['/assets/images/placeholder-resto.png']} */}
      {/*  isRecommended */}
      {/*  name="카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야" */}
      {/*  rating={4.2} */}
      {/*  ratingCount={139} */}
      {/*  desc="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는" */}
      {/*  city="Osaka" */}
      {/*  category="YAKITORI" */}
      {/*  priceRange="3~5" */}
      {/* /> */}
    </>
  );
}
