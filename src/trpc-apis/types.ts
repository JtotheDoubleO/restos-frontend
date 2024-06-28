import type { inferRouterOutputs } from '@trpc/server';

// Not using tRPC API as npm package - https://github.com/mkosir/trpc-api-boilerplate#avoid-publishing-package
import type { AppRouter } from './api-types';

type RouterOutput = inferRouterOutputs<AppRouter>;

// export type Resto = RouterOutput['resto']['create'];
export type Restos = RouterOutput['resto']['list'];
