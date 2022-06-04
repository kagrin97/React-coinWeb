import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "./Detail.css";

function Detail() {
  let { id } = useParams();
  const [coins, setCoins] = useState([]);

  const getFestivals = async () => {
    const json = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers?quotes=KRW`)
    ).json();
    setCoins(json.slice(Number(id) - 1, Number(id)));
    const a = json.slice(Number(id) - 1, Number(id));
    window.name = a[0].name;
    window.year = a[0].quotes.KRW.percent_change_1y;
    window.month = a[0].quotes.KRW.percent_change_30d;
    window.day7 = a[0].quotes.KRW.percent_change_7d;
    window.hour24 = a[0].quotes.KRW.percent_change_24h;
    window.hour12 = a[0].quotes.KRW.percent_change_12h;
    window.hour6 = a[0].quotes.KRW.percent_change_6h;
    window.hour = a[0].quotes.KRW.percent_change_1h;
    window.min30 = a[0].quotes.KRW.percent_change_30m;
    window.min15 = a[0].quotes.KRW.percent_change_15m;
  };

  useEffect(() => {
    getFestivals();
  }, []);

  const data = {
    labels: [
      "1년전",
      "30일전",
      "7일전",
      "24시간전",
      "12시간전",
      "6시간전",
      "1시간전",
      "30분전",
      "15분전",
    ],
    datasets: [
      {
        label: window.name,
        data: [
          window.year,
          window.month,
          window.day7,
          window.hour24,
          window.hour12,
          window.hour6,
          window.hour,
          window.min30,
          window.min15,
        ],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      <div>
        {coins.map((coin, index) => (
          <div key={index}>
            <div>순위: {coin.rank}</div>
            <div>코인 이름: {coin.name}</div>
            <div>심볼: {coin.symbol}</div>
            <div>현재 가격(KRW): {coin.quotes.KRW.price}</div>
          </div>
        ))}
      </div>

      <div>
        <Line data={data} />
      </div>
    </div>
  );
}

export default Detail;
