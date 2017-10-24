FROM node:0.12.7-wheezy

MAINTAINER YeTing "me@yeting.info"

WORKDIR /app

RUN npm install -g forever

RUN npm install -g babel-cli

COPY ./package.json /app/

RUN npm install

COPY . /app/

EXPOSE 8092

CMD forever server.js