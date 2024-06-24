import { getTranslations } from 'next-intl/server';
import React from 'react';

import { mergeClassnames } from '@/components/private/utils';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Have a good day, </h3>
        <button
          type="button"
          className={mergeClassnames(
            'flex justify-center items-center rounded-full bg-gray-50 p-3',
            'text-md font-semibold capitalize text-gray-500',
          )}
        >
          UA
        </button>
      </div>
      <div />
    </>
  );
}
