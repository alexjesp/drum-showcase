BIN=./node_modules/.bin

serve:
	@node server

lint:
	$(BIN)/standard

deploy:
	pm2 deploy production
