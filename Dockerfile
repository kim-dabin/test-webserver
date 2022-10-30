FROM node:alpine

#app 폴더 만들기 - NodeJS 어플리케이션 폴더
RUN mkdir -p /usr/src/app
#winston 등을 사용할떄엔 log 폴더도 생성

#어플리케이션 폴더를 Workdir로 지정 - 서버가동용
WORKDIR /usr/src/app

#서버 파일 복사 ADD [어플리케이션파일 위치] [컨테이너내부의 어플리케이션 파일위치]
COPY package*.json ./

#패키지파일들 받기
RUN npm install

COPY . .

EXPOSE 3000

ENV NODE_ENV production

CMD [ "node", "server.js" ]
