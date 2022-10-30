FROM node:alpine AS builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build


FROM nginx
RUN mkdir /app
COPY --from=builder /usr/src/app/dist /app/dist
WORKDIR /app/
COPY default.conf /etc/nginx/conf.d/default.conf
# 80 포트 오픈
EXPOSE 80
# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]