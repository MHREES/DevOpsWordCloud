include ../env
export $(shell sed 's/=.*//' ../env)

.PHONY: run

run:
	python import.py

default: run
