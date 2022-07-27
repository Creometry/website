FROM node:16-alpine3.15

RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app
WORKDIR /var/www/dockerize-nuxt/nuxt-app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]