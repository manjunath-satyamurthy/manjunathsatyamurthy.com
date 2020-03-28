#### DEVELOPMENT STAGE ####
FROM python:2.7-slim-buster AS development
RUN apt-get update && apt-get install --yes default-libmysqlclient-dev build-essential && yes | adduser --disabled-password python
USER python
RUN mkdir ~/app
WORKDIR /home/python/app
COPY ./requirements.txt ./
ENV PATH="/home/python/.local/bin:${PATH}"
RUN pip install -r requirements.txt
EXPOSE 8000
