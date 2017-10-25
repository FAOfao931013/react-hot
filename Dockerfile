FROM node:7

MAINTAINER FAO "465476662@qq.com"

COPY ./package.json /app/

COPY . /app/

WORKDIR /app

RUN npm install

EXPOSE 8092

CMD ["npm", "start"]