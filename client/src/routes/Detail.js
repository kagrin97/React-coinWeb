import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function Detail() {
  let { id } = useParams();
  const [coins, setCoins] = useState([]);

  const getFestivals = async () => {
    const json = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers?quotes=KRW`)
    ).json();
    setCoins(json.slice(Number(id) - 1, Number(id)));
  };

  useEffect(() => {
    getFestivals();
  }, []);

  return (
    <div>
      {coins.map((coin, index) => (
        <div key={index}>
          <div>{coin.rank}</div>

          <div>{coin.name}</div>

          <div>{coin.symbol}</div>
          <div>
            {Number(coin.quotes.KRW.price.toFixed(0)).toLocaleString("en")}
          </div>
          <div>{(coin.quotes.KRW.market_cap / 1000000000000).toFixed(2)}T</div>
          <div>{(coin.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}T</div>
          <div>{coin.quotes.KRW.percent_change_24h.toFixed(2)}%</div>
          <div>{coin.quotes.KRW.percent_change_7d.toFixed(2)}%</div>
        </div>
      ))}
    </div>
  );
}

export default Detail;
