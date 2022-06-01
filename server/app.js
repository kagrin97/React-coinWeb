const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const PORT = process.env.PORT || 4000;

app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용
});

app.use(express.static("build"));
// build를 사용할려면 use를 사용해서 사용해야함(보안문제)

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, function () {
  console.log(`Express server${PORT}`);
});

// 서버를 실행하는 과정

// client 폴더로  이동
// npm ci (node_modules가 없기때문에 만들어야함 ci는 lock을 참조함)
// npm run build
// client/build -> server/build 이동

// server 폴더로 이동
// npm ci (동일하게 모듈파일을 안올렸기때문)
// node app.js

// 자동으로 실행 하는 방법

// 상위폴더의 package.json 파일에 heroku-pre.. 를 실행시킨다 (명령어 집합)
// 그리고 npm start를 실행해 server에서 일어날일을 실행시킨다
// 2로 나누는 이유는 60초이내에 헤로쿠에 배포해야하는데
// start로만 하면 시간이 안될수도 있기때문이다
