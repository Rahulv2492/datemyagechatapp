FROM alpine:latest
RUN apk update && apk add --update nodejs && apk add yarn
RUN yarn global add npm@5.3.0 && npm install -g pm2 &&  mkdir -p /mobiotune-api
WORKDIR /mobiotune-api
COPY . /mobiotune-api
RUN npm install  && npm run build
EXPOSE 3000
CMD pm2 start --no-daemon processes.json
