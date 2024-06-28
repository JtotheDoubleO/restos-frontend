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
    </>
  );
}
