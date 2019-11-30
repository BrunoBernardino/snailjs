// flow-typed signature: 95d0159c259fc57ab6505fc0f8cec8cc
// flow-typed version: c6154227d1/koa-router_v7.2.x/flow_>=v0.104.x

/**
 * @flow
 */

type KoaRouter$Middleware = (
  ctx: any,
  next: () => Promise<void>
) => Promise<void> | void;

type KoaRouter$ParamMiddleware = (
  param: string,
  ctx: any,
  next: () => Promise<void>
) => Promise<void> | void;

declare module "koa-router" {
  declare class Router {
    constructor(opts?: {
      prefix?: string,
      sensitive?: boolean,
      strict?: boolean,
      methods?: Array<string>,
      ...
    }): Router;

    get(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware
    ): this;
    get(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware>
    ): this;

    patch(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware
    ): this;
    patch(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware>
    ): this;

    post(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware
    ): this;
    post(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware>
    ): this;

    put(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware
    ): this;
    put(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware>
    ): this;

    delete(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware
    ): this;
    delete(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware>
    ): this;

    del(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware
    ): this;
    del(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware>
    ): this;

    all(
      name: string,
      route: string | string[],
      handler: KoaRouter$Middleware
    ): this;
    all(
      route: string | string[],
      ...middleware: Array<KoaRouter$Middleware>
    ): this;

    use(...middleware: Array<KoaRouter$Middleware>): this;
    use(
      path: string | Array<string>,
      ...middleware: Array<KoaRouter$Middleware>
    ): this;

    prefix(prefix: string): this;

    routes(): KoaRouter$Middleware;

    allowedMethods(options?: {
      throw?: boolean,
      notImplemented?: () => any,
      methodNotAllowed?: () => any,
      ...
    }): KoaRouter$Middleware;

    param(param: string, middleware: KoaRouter$ParamMiddleware): this;

    redirect(source: string, destination: string, code?: number): this;

    route(name: string): any | false;

    url(name: string, params?: any): string | Error;

    static url(path: string, params: Object): string;
  }

  declare module.exports: typeof Router;
}
