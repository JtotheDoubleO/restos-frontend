'use client';

import React from 'react';

import { Card } from '@/components/Card';
import { trpcApiBoilerplateClient } from '@/trpc-apis';

const CardList = () => {
  const { data: restos } = trpcApiBoilerplateClient.resto.list.useQuery();

  return (
    restos &&
    restos.length > 0 &&
    restos.map((resto) => <Card key={resto.id} {...resto} />)
  );
};

export { CardList };
