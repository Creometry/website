FROM golang:1.18.3-alpine3.16 AS builder

WORKDIR /build

COPY go.mod go.sum ./

RUN go mod download

COPY . .

ENV CGO_ENABLED=1 GOOS=linux GOARCH=amd64

RUN apk add build-base

RUN go build -ldflags="-s -w" -o apiserver .

FROM alpine

WORKDIR /app

COPY --from=builder ["/build/apiserver", "/app"]

RUN mkdir /credentials

EXPOSE 5001

ENTRYPOINT ["/app/apiserver"]