.PHONY: setup install start test test/ci test/build test/pretty lint build pretty deploy deploy/update deploy/destroy deploy/serverless

setup:
	make install

install:
	-cp -n .env .env.local
	-cp -n deploy/variables.tf.sample deploy/variables.tf
	npm install

start:
	npm start

test:
	make lint
	npm test

test/ci:
	make lint
	npm run test/ci

test/build:
	make build
	npm run start/prod

test/pretty:
	npm run pretty/test

lint:
	npm run lint
	./node_modules/.bin/flow

build:
	npm run build

pretty:
	npm run pretty

deploy:
	cd deploy && terraform init && terraform apply --auto-approve

deploy/update:
	test -n "$(IP)" || (echo "Please define an IP variable" ; exit 1)
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

deploy/serverless:
	cp now-deploy.json build/now.json
	cp package.json build/
	cp package-lock.json build/
	cp .env build/
	cp .env.production build/
	cp now-cleanup.js build/
	cd build && node now-cleanup.js && rm package.json && mv package-clean.json package.json && rm now-cleanup.js && now --prod
