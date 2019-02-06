import path from 'path';
import Koa from 'koa';
import Router from 'koa-router';
import mount from 'koa-mount';
import serve from 'koa-static';
import favicon from 'koa-favicon';
import logger from 'koa-logger';
import compress from 'koa-compress';

require('dotenv-flow').config();

const SERVER_PORT = process.env.BACKEND_PORT || 5000;

const app = new Koa();
const router = new Router();

const initServer = async () => {
  router.get('/server', (ctx) => {
    ctx.body = 'Server render!!';
  });

  app.use(logger());

  if (process.env.NODE_ENV === 'development') {
    const koaWebpack = require('koa-webpack'); // eslint-disable-line import/no-extraneous-dependencies
    const options = {
      devMiddleware: {
        publicPath: '/',
      },
      config: {
        mode: process.env.NODE_ENV,
        entry: [path.join(__dirname, 'public', 'main.js')],
      },
    };
    const hotReloader = await koaWebpack(options);
    app.use(hotReloader);
  } else {
    app.use(compress());
  }

  app.use(favicon(path.join(__dirname, 'public', 'static', 'logo.png')));
  app.use(serve(path.join(__dirname, 'public')));
  app.use(mount('/static', serve(path.join(__dirname, 'public', 'static'))));
  app.use(router.routes());

  app.on('error', (err, ctx) => {
    console.error(err, ctx);
  });

  app.listen(SERVER_PORT);

  console.log(`Listening on http://localhost:${SERVER_PORT}`);
};

initServer();

export default app;
