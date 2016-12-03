include ../env
VERSION ?= latest

REPO = neo4j
NAME = neo4j
INSTANCE = default
UN_NEO4J_PORTS = $(patsubst "%",%,$(NEO4J_PORTS))

.PHONY: run

run:
	docker run -d --name $(NAME)-$(INSTANCE) $(UN_NEO4J_PORTS) $(patsubst "%",%,$(NEO4J_VOLUMES)) $(NEO4J_ENV) $(REPO):$(VERSION)

stop:
	docker stop $(NAME)-$(INSTANCE)

start:
	docker start $(NAME)-$(INSTANCE)

rm:
	docker rm -v $(NAME)-$(INSTANCE)

default: run
