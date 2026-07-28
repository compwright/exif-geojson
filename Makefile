lint:
	npx standard --fix

test: lint
	NODE_OPTIONS="$$NODE_OPTIONS --experimental-vm-modules" npx jest
