FROM node:16.15.1-slim as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run generate
FROM nginx:alpine
COPY --from=builder /app/dist  /usr/share/nginx/html
EXPOSE 80