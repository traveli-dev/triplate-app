# cp modules
cp:
	docker compose up -d
	docker cp traveli-app:/home/app/node_modules/ ./front/
	docker compose down