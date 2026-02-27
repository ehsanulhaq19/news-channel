# Build stage
FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json* ./

RUN npm install

COPY ./frontend ./

RUN npm run build

# Production stage
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ./docker/frontend/nginx.conf /etc/nginx/conf.d

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
