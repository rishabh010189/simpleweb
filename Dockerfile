FROM node:12

WORKDIR /usr/simpleweb

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]