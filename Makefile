build:
	rm -rf dist
	npm run build
	cp ./src/index.html ./dist/index.html
	cp -r ./src/images ./dist/images