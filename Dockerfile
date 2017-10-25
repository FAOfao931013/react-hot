FROM node:7

MAINTAINER FAO "465476662@qq.com"

WORKDIR /app

COPY ./package.json /app/

RUN npm install

COPY . /app/

EXPOSE 8092