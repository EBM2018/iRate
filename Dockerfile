FROM node:alpine

WORKDIR /app

COPY ./backend/package.json ./backend/package-lock.json /app/

RUN npm ci --production

COPY ./backend /app
COPY ./frontend/build /app/public

ENV NODE_ENV=production
ENV APP_PORT=4000
EXPOSE 4000

ENTRYPOINT npm run prod
