.PHONY: update_modules
update_modules:
	@echo ">>> Removing node_modules and package-lock.json"
	rm package-lock.json && rm -rf node_modules
	@echo ">>> Installing node modules"
	npm i

.PHONY: upgrade_modules
upgrade_modules:
	@echo ">>> Updating outdated node modules"
	npm outdated | grep -v Package | awk '{print $1}' | xargs -I% npm install %@latest --save
