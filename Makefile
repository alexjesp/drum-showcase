BIN=./node_modules/.bin

serve:
	@$(BIN)/webpack-dev-server --inline --hot --port 2000

lint:
	$(BIN)/standard
