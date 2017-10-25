FROM node:7

MAINTAINER FAO "465476662@qq.com"

WORKDIR /app

RUN npm install --save-dev babel-cli

COPY ./package.json /app/

RUN npm install

COPY . /app/

EXPOSE 8092

CMD npm run dev