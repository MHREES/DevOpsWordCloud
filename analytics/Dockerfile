FROM python:2.7.12

COPY env /home/

RUN export $(cat /home/env | grep NEO4J_URL) && \
    export $(cat /home/env | grep NEO4J_PASSWORD)

RUN pip install py2neo && \
    pip install requests

EXPOSE 7474

ENTRYPOINT ["python"]
