'use client';

import React from 'react';

import { Card } from '@/components/Card';
import { useAppSelector } from '@/libs/hooks';
import { trpcApiBoilerplateClient } from '@/trpc-apis';

const CardList = () => {
  const qByName = useAppSelector((state) => state.query.q);
  const qByCategory = useAppSelector((state) => state.query.category);

  const { data: restos } = trpcApiBoilerplateClient.resto.list.useQuery({
    category: qByCategory === 'all' ? undefined : qByCategory,
    q: qByName === '' ? undefined : qByName,
  });

  return (
    restos &&
    restos.length > 0 &&
    restos.map((resto) => <Card key={resto.id} {...resto} />)
  );
};

export { CardList };
