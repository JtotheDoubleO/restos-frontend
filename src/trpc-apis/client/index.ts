import { createTRPCReact } from '@trpc/react-query';

import type { AppRouter } from '@/trpc-apis';

export const trpcApiBoilerplateClient = createTRPCReact<AppRouter>();

// export const trpcApiBoilerplateClientProvider =
//   trpcApiBoilerplateClient.createClient({
//     links: [httpBatchLink({ url: `${Env.NEXT_PUBLIC_TRPC_API}/trpc` })],
//     transformer: superjson,
//   });
