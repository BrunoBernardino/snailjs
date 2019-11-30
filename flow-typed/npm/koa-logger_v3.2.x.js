// flow-typed signature: 00dda26f466c2209db551ccbb8beb05e
// flow-typed version: ac32043d4a/koa-logger_v3.2.x/flow_>=v0.53.x

declare module 'koa-logger' {
  declare type TransporterArguments =
    // This argument can take these 2 forms:
    // - Request: [format, method, url]
    // - Response: [format, method, url, status, time, length]
    // Typing it with only 1 tuple instead of a union makes it easier to work with.
    [ string, string, string, number | void, string | void, string | void ];

  declare type Transporter = (string, TransporterArguments) => mixed;

  // It's not really worth typing the context completely here. All we want is to
  // make sure that this return value can be used in Koa's `use` method.`
  declare type KoaMiddleware = (ctx: any, next: () => Promise<void>) => Promise<void>;
  declare function logger(transport?: Transporter | {| +transporter: Transporter |}): KoaMiddleware;

  // Using the CommonJS way of exporting so that we can easily use `require`
  // conditionally. Indeed we'll mostly want to use this in development mode only.
  declare module.exports: typeof logger;
}
