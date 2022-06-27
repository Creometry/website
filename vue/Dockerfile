
FROM node:lts as builder

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

RUN npm run build

FROM node:lts

WORKDIR /app

COPY --from=builder /app .

ENV HOST 0.0.0.0
EXPOSE 8001

CMD [ "npm", "start" ]