FROM node:18-alpine3.17 as build

WORKDIR /app

#parte de la prueba
COPY .env.$NODE_ENV .env

COPY . /app

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
