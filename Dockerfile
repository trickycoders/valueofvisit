# Official Node image for fat version
# FROM node:argon
# Awesome tiny node image
# FROM iron/node
FROM node:alpine

WORKDIR /app
ADD . /app
RUN npm i

RUN npm run build

EXPOSE 8080

RUN node -v

RUN ls -lrth

ENTRYPOINT [ "node", "server.js" ]