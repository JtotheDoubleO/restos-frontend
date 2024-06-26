'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React, { useState } from 'react';
import superjson from 'superjson';

import { Env } from '@/libs/Env';
import { trpcApiBoilerplateClient } from '@/trpc-apis';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpcApiBoilerplateClient.createClient({
      links: [httpBatchLink({ url: `${Env.NEXT_PUBLIC_TRPC_API}/trpc` })],
      transformer: superjson,
    }),
  );

  return (
    <trpcApiBoilerplateClient.Provider
      client={trpcClient}
      queryClient={queryClient}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpcApiBoilerplateClient.Provider>
  );
};
