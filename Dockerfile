FROM node:latest
WORKDIR /src/app
COPY package*.json ./
RUN npm install

# If you are building your code for production
# https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable
# RUN npm ci --omit=dev

COPY . .

EXPOSE 8080
CMD [ "ts-node", "server.ts" ]