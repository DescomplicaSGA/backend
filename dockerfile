FROM node:10

RUN mkdir /app

WORKDIR /app

COPY *json /app

RUN npm install

COPY . /app

EXPOSE 3333