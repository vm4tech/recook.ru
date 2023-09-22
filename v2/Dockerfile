FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm i
RUN npm ci
RUN npm run build
ENV NODE_ENV production
