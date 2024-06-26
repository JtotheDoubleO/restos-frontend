'use client';

import React from 'react';

import { Card } from '@/components/Card';
import { trpcApiBoilerplateClient } from '@/trpc-apis';

const CardList = () => {
  // const t = useTranslations('Search');

  const { data: restos } = trpcApiBoilerplateClient.resto.list.useQuery();
  console.log(restos);

  return (
    restos &&
    restos.length > 0 &&
    restos.map((resto) => <Card key={resto.id} {...resto} />)
  );
};

export { CardList };
