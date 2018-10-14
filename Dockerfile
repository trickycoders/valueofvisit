# Official Node image for fat version
# FROM node:argon
# Awesome tiny node image
# FROM iron/node
FROM node:alpine

WORKDIR /app
ADD . /app

RUN npm install

RUN npm install pm2 -g

EXPOSE 8080

RUN node -v

ENTRYPOINT [ "node", "server.js" ]