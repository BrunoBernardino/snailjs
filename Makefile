.PHONY: setup install start test test/ci test/build test/pretty lint build pretty deploy deploy/update deploy/destroy

setup:
	make install

install:
	-cp -n .env .env.local
	-cp -n deploy/variables.tf.sample deploy/variables.tf
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

deploy:
	make build
	cd deploy && terraform init && terraform apply --auto-approve

deploy/update:
	-ssh root@${IP} '/app/stop.sh'
	ssh root@${IP} 'rm -fr /app/server.js /app/public'
	scp "package.json" root@${IP}:"/app/package.json"
	scp ".env" root@${IP}:"/app/.env"
	scp ".env.production" root@${IP}:"/app/.env.production"
	scp -r build/* root@${IP}:"/app"
	ssh root@${IP} '/app/install.sh'
	ssh root@${IP} '/app/start.sh'

deploy/destroy:
	@echo "Are you sure you want to destroy the server/infra? (y/n)" && read ans && [ $${ans:-n} == y ]
	cd deploy && terraform destroy --auto-approve
