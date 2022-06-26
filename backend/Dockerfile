FROM node:17-alpine

RUN mkdir -p /app
COPY . /app

WORKDIR /app

RUN npm install && npm install -g nodemon

CMD ["node", "app.js"]