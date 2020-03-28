FROM node:12.13-buster-slim AS development
USER node
RUN mkdir ~/app
WORKDIR /home/node/app
COPY ./package.json ./package-lock.json ./
RUN  npm install
EXPOSE 3000
CMD ["sh", "-c", "npm start"]

FROM development AS build
COPY . .
RUN npm run build

FROM scratch AS production
COPY --from=build /home/node/app/build ./
