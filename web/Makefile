include ../env

.PHONY: run

run:
	if docker ps -a | grep -q web; then docker rm -f web; fi
	docker rmi wilkhuh/web
	docker build -t wilkhuh/web .
	docker run -d --env-file ../env --link neo4j-default:neo -p 3000:3000 --name web wilkhuh/web

default: run
