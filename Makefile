.PHONY: serve bootstrap lint deploy

BIN=./node_modules/.bin

start:
	node server

build:
	$(BIN)/webpack

build-production:
	NODE_ENV=production npm i
	NODE_ENV=production $(BIN)/webpack

bootstrap:
	npm i

lint:
	$(BIN)/standard

deploy:
	pm2 deploy production
