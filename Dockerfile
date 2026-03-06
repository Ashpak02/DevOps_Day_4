FROM node:latest

WORKDIR /devops

COPY . .

RUN  npm install

EXPOSE 3000

CMD [ "npm","start"]
