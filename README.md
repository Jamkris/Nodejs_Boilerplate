# 프로젝트 설정

## 프로젝트 생성

```bash
git clone https://github.com/Jamkris/NodeJS_OAuth.git server
```

## 모듈 설치

```bash
npm install
```

## 환경변수 설정

```bash
PORT = '서버 포트'

DB_ID = 'DB 아이다'
DB_PW = "DB 비밀번호"
DB_POST = "DB 호스트"
DB_PORT = "3306"
DB_SCHEMA = "DB 스키마이름"

CLIENT_ORIGIN = '프론트엔드 주소'
SERVER_ORIGIN = '백엔드 주소'

SECRET_KEY = "JWT SECRET"
SESSEION_SECRET = "SESSEION SECRET"

ACCESS_EXPIRED = "엑세스토큰 만료일자(3d)"
REFRESH_EXPIRED = "리프레쉬토큰 만료일자(1y)"
```

## 실행

```bash
npm start
```

## API 명세서
```
Working State
state : GET /

Auth
signup : POST /auth/signup
signin : POST /auth/signin
```
