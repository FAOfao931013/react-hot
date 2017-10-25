FROM node:0.12.7-wheezy

MAINTAINER FAO "465476662@qq.com"

WORKDIR /app

RUN npm install -g forever

RUN npm install --save-dev babel-cli

COPY ./package.json /app/

RUN npm install

COPY . /app/

EXPOSE 8092

CMD forever server.js