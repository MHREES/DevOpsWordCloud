FROM python:2.7



RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app

#COPY env /usr/src/app
COPY import.py /usr/src/app

RUN pip install -r /usr/src/app/requirements.txt 


CMD [ "python", "/usr/src/app/import.py" ]

