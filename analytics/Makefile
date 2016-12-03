include ../env
export $(shell sed 's/=.*//' ../env)

.PHONY: run

run:
	docker run -d \
	-v /home/ec2-user/devops-training-sample-project/analytics:/home/ \
	--env-file ../env \
	--link neo4j-default:neo4j \
	--name analytics wilkhuh/analytics /home/import.py

default: run
