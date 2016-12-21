include ../env
export $(shell sed 's/=.*//' ../env)
VERSION ?= latest

REPO = python
NAME = python
INSTANCE = default

.PHONY: run

build:
	docker build -t $(REPO):$(VERSION) .

run:
	docker run --net=host -d --name $(NAME)-$(INSTANCE) $(PYTHON_PORTS) $(PYTHON_VOLUMES) $(PYTHON_ENV) $(REPO):$(VERSION)

stop:
	docker stop $(NAME)-$(INSTANCE)

start:
	docker start $(NAME)-$(INSTANCE)

rm:
	docker rm -v $(NAME)-$(INSTANCE)
