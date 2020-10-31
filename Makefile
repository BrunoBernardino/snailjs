.PHONY: install
install:
	-cp -n .env .env.local
	-cp -n deploy/variables.tf.sample deploy/variables.tf
	npm install

.PHONY: start
start:
	npm start

.PHONY: test
test:
	make lint
	npm test

.PHONY: test/ci
test/ci:
	make lint
	npm run test/ci

.PHONY: test/update
test/update:
	make lint
	npm test -- -u

.PHONY: test/build
test/build:
	make build
	npm run start/prod

.PHONY: test/pretty
test/pretty:
	npm run pretty/test

.PHONY: lint
lint:
	npm run lint

.PHONY: build
build:
	npm run build

.PHONY: pretty
pretty:
	npm run pretty

.PHONY: deploy
deploy:
	cd deploy && terraform init && terraform apply --auto-approve

.PHONY: deploy/update
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

.PHONY: deploy/destroy
deploy/destroy:
	@echo "Are you sure you want to destroy the server/infra? (y/n)" && read answer && [ $${answer:-n} == y ]
	cd deploy && terraform destroy --auto-approve

.PHONY: deploy/serverless
deploy/serverless:
	cp vercel-deploy.json build/vercel.json
	cp package.json build/
	cp package-lock.json build/
	cp .env build/
	cp .env.production build/
	cp vercel-cleanup.js build/
	cd build && node vercel-cleanup.js && rm package.json && mv package-clean.json package.json && rm vercel-cleanup.js && vercel --prod
