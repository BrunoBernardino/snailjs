.PHONY: setup install start test test/ci test/build test/pretty lint build pretty

setup:
	make install

install:
	yarn install

start:
	yarn start

test:
	make lint
	yarn test

test/ci:
	make lint
	yarn test/ci

test/build:
	make build
	yarn start/prod

test/pretty:
	yarn pretty/test

lint:
	yarn lint
	yarn flow

build:
	yarn build

pretty:
	yarn pretty

# deploy:
# 	make build
#   TODO: Run terraform and update script
