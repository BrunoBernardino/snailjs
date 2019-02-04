[![Build Status](https://travis-ci.org/BrunoBernardino/snailjs.svg?branch=master)](https://travis-ci.org/BrunoBernardino/snailjs)

# SnailJS - Slow and thoughtful development with Node and React

SnailJS is a starter/boilerplate app that attempts to define some structure for projects where the people involved want to dedicate some thought into how they will be built, don't want to give up control, and want to be fairly optimized.

![Screenshot](https://user-images.githubusercontent.com/1239616/52240145-13119380-28c8-11e9-9ebb-c10286368153.png)

It's not very opinionated. It's meant to build an app using [Webpack](https://webpack.js.org) (for dev/prod optimizations), [Babel](https://babeljs.io) (for the nice `import` syntax and other goodies), a [Koa backend](https://koajs.com), a [React frontend](https://reactjs.org), and [Flow static typing](https://flow.org), with some common needs like routing, absolute paths, SASS parsing, tests, and build processes.

Other than that, it doesn't force you to specific tech solutions like how to code split, [redux](https://redux.js.org), [mobx](https://mobx.js.org), [mustache](https://mustache.github.io), [mongo](https://www.mongodb.com), [mysql](mysql), etc. There are other tools for that kind of opinionated app building like [SailsJS](https://sailsjs.com).

If you need a simple frontend app, try [create-react-app](https://facebook.github.io/create-react-app/). If you need a bit more complexity (or a "webpacked" node app), [Neutrino](https://neutrinojs.org) is pretty good as well.

This really serves the purpose of someone wanting/needing something like SailsJS but without all the magic/opinionated code.

## Requirements

`node` (ideally via `nvm`, so `.nvmrc` is respected) and `yarn`.

## Development

`make install` or `make setup` for getting everything setup

`make start` for dev build. Check if you want to create a `.env.local` file with unversioned overrides.

`make lint` to run linting and flow type checking

`make test` to run `make lint` and tests

`make pretty` to run `prettier` on all code

`make test/pretty` to check if `prettier` needs to change anything

`make build` for prod build

`make test/build` for prod build and serving it locally in production mode

## TODOs

- [ ] Terraform file/structure for deploying to DigitalOcean with nginx, forever, SSL, and update script
