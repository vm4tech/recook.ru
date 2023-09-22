FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm ci
RUN npm run build
ENV NODE_ENV production