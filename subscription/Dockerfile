FROM golang:1.18.3-alpine3.16 AS build

WORKDIR /build

COPY go.mod go.sum ./

RUN go mod download

COPY . .

ENV CGO_ENABLED=1 GOOS=linux GOARCH=amd64

RUN apk add build-base

RUN go build -ldflags="-s -w" -o apiserver .

##
## Deploy
##
FROM gcr.io/distroless/static-debian11

COPY --from=build ["/build/apiserver", "/"]

RUN mkdir data

EXPOSE 5000

ENTRYPOINT ["/apiserver"]