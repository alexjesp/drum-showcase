.PHONY: serve bootstrap lint deploy

BIN=./node_modules/.bin

start:
	node server

build:
	$(BIN)/webpack

bootstrap:
	npm i

lint:
	$(BIN)/standard

deploy:
	NODE_ENV=production $(BIN)/webpack
	pm2 deploy production
