FROM node:16.15.1-slim
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80
EXPOSE 8001
CMD [ "npm","start" ]
