FROM node:20.12.2  as builder

WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN npm run build:pro

FROM nginx:latest

COPY  --from=builder /app/dist/admin-starter /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 