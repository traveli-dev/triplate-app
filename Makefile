.SILENT:
# cp modules
cp:
	docker compose exec node echo "copy node_modules files from container"
	docker cp traveli-app:/home/app/node_modules/ ./front/