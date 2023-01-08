all: test dist

clean:
	rm -rf node_modules

test: node_modules

.PHONY: all clean test

dist: action.yml index.js node_modules
	npx ncc build index.js --license LICENCE
	touch $@

node_modules: package.json
	npm install
	touch $@
