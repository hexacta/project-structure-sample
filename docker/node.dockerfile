FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY api/build /usr/src/app
COPY api/node_modules /usr/src/app/node_modules
EXPOSE 8080
CMD [ "node", "server.js" ]