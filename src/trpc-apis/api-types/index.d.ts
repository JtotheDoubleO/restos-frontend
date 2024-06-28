import type * as _trpc_server from '@trpc/server';
import type * as express from 'express';
import type * as express_serve_static_core from 'express-serve-static-core';
import type * as qs from 'qs';
import type * as superjson from 'superjson';

type DeepMutable<T> = {
  -readonly [P in keyof T]: DeepMutable<T[P]>;
};

declare const appRouter: _trpc_server.CreateRouterInner<
  _trpc_server.RootConfig<{
    ctx: {
      req: express.Request<
        express_serve_static_core.ParamsDictionary,
        any,
        any,
        qs.ParsedQs,
        Record<string, any>
      >;
      res: express.Response<any, Record<string, any>>;
    };
    meta: object;
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: typeof superjson.default;
  }>,
  {
    batch: _trpc_server.CreateRouterInner<
      _trpc_server.RootConfig<{
        ctx: {
          req: express.Request<
            express_serve_static_core.ParamsDictionary,
            any,
            any,
            qs.ParsedQs,
            Record<string, any>
          >;
          res: express.Response<any, Record<string, any>>;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: typeof superjson.default;
      }>,
      {
        list: _trpc_server.BuildProcedure<
          'query',
          {
            _config: _trpc_server.RootConfig<{
              ctx: {
                req: express.Request<
                  express_serve_static_core.ParamsDictionary,
                  any,
                  any,
                  qs.ParsedQs,
                  Record<string, any>
                >;
                res: express.Response<any, Record<string, any>>;
              };
              meta: object;
              errorShape: _trpc_server.DefaultErrorShape;
              transformer: typeof superjson.default;
            }>;
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
          },
          DeepMutable<{
            id: string;
            title: string;
            description: string | null;
            purity: number;
            weight: number;
            producers: {
              id: string;
              isFavorite: boolean;
              images: string[];
              featured: {
                text: string;
                icon: string;
              };
              name: string;
              rating: number;
              ratingCount: number;
              city: string;
              category: string;
              priceRange: string;
              desc: string;
            }[];
            supplier: {
              id: string;
              name: string;
              description: string | null;
            } | null;
          }>[]
        >;
      }
    >;
    resto: _trpc_server.CreateRouterInner<
      _trpc_server.RootConfig<{
        ctx: {
          req: express.Request<
            express_serve_static_core.ParamsDictionary,
            any,
            any,
            qs.ParsedQs,
            Record<string, any>
          >;
          res: express.Response<any, Record<string, any>>;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: typeof superjson.default;
      }>,
      {
        list: _trpc_server.BuildProcedure<
          'query',
          {
            _config: _trpc_server.RootConfig<{
              ctx: {
                req: express.Request<
                  express_serve_static_core.ParamsDictionary,
                  any,
                  any,
                  qs.ParsedQs,
                  Record<string, any>
                >;
                res: express.Response<any, Record<string, any>>;
              };
              meta: object;
              errorShape: _trpc_server.DefaultErrorShape;
              transformer: typeof superjson.default;
            }>;
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
          },
          DeepMutable<{
            id: string;
            isFavorite: boolean;
            images: string[];
            featured: {
              text: string;
              icon: string;
            };
            name: string;
            rating: number;
            ratingCount: number;
            city: string;
            category: string;
            priceRange: string;
            desc: string;
          }>[]
        >;
        show: _trpc_server.BuildProcedure<
          'query',
          {
            _config: _trpc_server.RootConfig<{
              ctx: {
                req: express.Request<
                  express_serve_static_core.ParamsDictionary,
                  any,
                  any,
                  qs.ParsedQs,
                  Record<string, any>
                >;
                res: express.Response<any, Record<string, any>>;
              };
              meta: object;
              errorShape: _trpc_server.DefaultErrorShape;
              transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: string;
            _input_out: string;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
          },
          | DeepMutable<{
              id: string;
              isFavorite: boolean;
              images: string[];
              featured: {
                text: string;
                icon: string;
              };
              name: string;
              rating: number;
              ratingCount: number;
              city: string;
              category: string;
              priceRange: string;
              desc: string;
            }>
          | `Restaurant with id:${string} does not exist in database.`
        >;
        destroy: _trpc_server.BuildProcedure<
          'mutation',
          {
            _config: _trpc_server.RootConfig<{
              ctx: {
                req: express.Request<
                  express_serve_static_core.ParamsDictionary,
                  any,
                  any,
                  qs.ParsedQs,
                  Record<string, any>
                >;
                res: express.Response<any, Record<string, any>>;
              };
              meta: object;
              errorShape: _trpc_server.DefaultErrorShape;
              transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: {
              id: string;
            };
            _input_out: {
              id: string;
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
          },
          DeepMutable<{
            id: string;
            isFavorite: boolean;
            images: string[];
            featured: {
              text: string;
              icon: string;
            };
            name: string;
            rating: number;
            ratingCount: number;
            city: string;
            category: string;
            priceRange: string;
            desc: string;
          }>[]
        >;
        create: _trpc_server.BuildProcedure<
          'mutation',
          {
            _config: _trpc_server.RootConfig<{
              ctx: {
                req: express.Request<
                  express_serve_static_core.ParamsDictionary,
                  any,
                  any,
                  qs.ParsedQs,
                  Record<string, any>
                >;
                res: express.Response<any, Record<string, any>>;
              };
              meta: object;
              errorShape: _trpc_server.DefaultErrorShape;
              transformer: typeof superjson.default;
            }>;
            _meta: object;
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: {
              body: {
                isFavorite: boolean;
                featured: {
                  text: string;
                  icon: string;
                };
                name: string;
                rating: number;
                ratingCount: number;
                city: string;
                category: string;
                priceRange: string;
                desc: string;
                images?: string[] | undefined;
              };
            };
            _input_out: {
              body: {
                isFavorite: boolean;
                images: string[];
                featured: {
                  text: string;
                  icon: string;
                };
                name: string;
                rating: number;
                ratingCount: number;
                city: string;
                category: string;
                priceRange: string;
                desc: string;
              };
            };
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
          },
          {
            id: string;
            isFavorite: boolean;
            images: string[];
            featured: {
              text: string;
              icon: string;
            };
            name: string;
            rating: number;
            ratingCount: number;
            city: string;
            category: string;
            priceRange: string;
            desc: string;
          }
        >;
      }
    >;
    util: _trpc_server.CreateRouterInner<
      _trpc_server.RootConfig<{
        ctx: {
          req: express.Request<
            express_serve_static_core.ParamsDictionary,
            any,
            any,
            qs.ParsedQs,
            Record<string, any>
          >;
          res: express.Response<any, Record<string, any>>;
        };
        meta: object;
        errorShape: _trpc_server.DefaultErrorShape;
        transformer: typeof superjson.default;
      }>,
      {
        seedDb: _trpc_server.BuildProcedure<
          'mutation',
          {
            _config: _trpc_server.RootConfig<{
              ctx: {
                req: express.Request<
                  express_serve_static_core.ParamsDictionary,
                  any,
                  any,
                  qs.ParsedQs,
                  Record<string, any>
                >;
                res: express.Response<any, Record<string, any>>;
              };
              meta: object;
              errorShape: _trpc_server.DefaultErrorShape;
              transformer: typeof superjson.default;
            }>;
            _ctx_out: {
              req: express.Request<
                express_serve_static_core.ParamsDictionary,
                any,
                any,
                qs.ParsedQs,
                Record<string, any>
              >;
              res: express.Response<any, Record<string, any>>;
            };
            _input_in: typeof _trpc_server.unsetMarker;
            _input_out: typeof _trpc_server.unsetMarker;
            _output_in: typeof _trpc_server.unsetMarker;
            _output_out: typeof _trpc_server.unsetMarker;
            _meta: object;
          },
          'Database initialized successfully.'
        >;
      }
    >;
  }
>;
type AppRouter = typeof appRouter;

declare const USER_ROLES: readonly ['administrator', 'apprentice', 'standard'];

type Square = {
  shape: 'square';
  size: number;
};
type Rectangle = {
  shape: 'rectangle';
  width: number;
  height: number;
};
type Shape = Square | Rectangle;
declare const SharedSquareObject: Shape;

export { type AppRouter, type Shape, SharedSquareObject, USER_ROLES };