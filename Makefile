SHELL=/bin/bash

env := $(shell docker compose exec node echo "up" || echo "down")

init:
	@docker compose build
	@docker compose run --rm node yarn init:firebase
	@docker compose run --rm node firebase login --no-localhost

up:
	@docker compose up

down:
	@docker compose down

exec:
	@docker compose exec node /bin/bash

check:
	@docker compose exec node yarn check

format:
	@docker compose exec node yarn format

yarn-install:
	@[ $(env) = "down" ] && docker compose up -d || echo "uped"
	@docker compose exec node yarn install
	@docker compose exec node echo "copy node_modules files from container"
	docker cp traveli-app:/home/app/node_modules/ ./front/
	@[ $(env) = "down" ] && docker compose down || echo "installed"
