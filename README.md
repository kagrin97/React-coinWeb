<h2>암호화폐 실시간 랭킹을 보여주는 웹</h2>

 https://react-coinweb.herokuapp.com/
 
![1](https://user-images.githubusercontent.com/75124028/172612493-705f1173-7241-4e76-801d-ec87e27bc69e.gif)

기능

1. 코인파프리카 API를 이용해서 1위부터 50위까지 가격과 변동되는 가격(올라가면 빨간색 내려가면 파란색)
2. 코인 이름을 클릭하면 코인의 1년전부터 지금 까지의 코인 가격 변동률을 chartJS를 이용해 선 그래프로 표현합니다

문제점

1. chartJS를 이용해서 JSON을 가져와 변수에 저장할떄 window.@#$에 따로 저장을하는 비효율적인 방법을 사용
<div>
  <div>2. 처음엔 공공데이터를 가져올려 했지만 cors에 막혀서 여러 방법을 하였지만 실패</div>
    <div>2-1. package.js 파일에 프록시 주소를 추가 했지만 실패</div>
    <div>2-2. midleware라는 패키지를 사용해 프록시를 경유할려 하였지만 실패(이유를 모르겠네요)</div>
 </div>
