BIN=./node_modules/.bin

serve:
	@nodemon server

lint:
	$(BIN)/standard
