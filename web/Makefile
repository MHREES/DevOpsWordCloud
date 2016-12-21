include ../env
export $(shell sed 's/=.*//' ../env)
VERSION ?= latest

REPO = web
NAME = web
INSTANCE = default

.PHONY: run

build:
	docker build -t $(REPO):$(VERSION) .

run:
	docker run -d --net=host --name $(NAME)-$(INSTANCE) $(WEB_PORTS) $(WEB_VOLUMES) $(WEB_ENV) $(REPO):$(VERSION)

stop:
	docker stop $(NAME)-$(INSTANCE)

start:
	docker start $(NAME)-$(INSTANCE)

rm:
	docker rm -v $(NAME)-$(INSTANCE)
