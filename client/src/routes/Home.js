import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFestivals = async () => {
    const json = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers?quotes=KRW`)
    ).json();
    setCoins(json.slice(0, 50));
    setLoading(false);
  };

  useEffect(() => {
    getFestivals();
  }, []);
  return (
    <div>
      <div className="title">암호 화폐 50순위</div>

      {loading ? (
        <div>
          <h1> Coin is running......</h1>
        </div>
      ) : (
        <table>
          <table className="sub__title">
            <thead>
              <tr>
                <th>순위</th>
                <th>종목</th>
                <th>기호</th>
                <th>가격 KRW</th>
                <th>총 시가</th>
                <th>거래량 24h</th>
                <th>변동 24h</th>
                <th>변동 7d</th>
              </tr>
            </thead>
          </table>

          <table className="coins">
            {coins.map((coin, index) => (
              <thead>
                <tr key={index} className="coin">
                  <th>{coin.rank}</th>
                  <th className="link__th">
                    <Link className="link" to={`/detail/${index + 1}`}>
                      {coin.name}
                    </Link>
                  </th>
                  <th>{coin.symbol}</th>
                  <th>
                    {Number(coin.quotes.KRW.price.toFixed(0)).toLocaleString(
                      "en"
                    )}
                  </th>
                  <th>
                    {(coin.quotes.KRW.market_cap / 1000000000000).toFixed(2)}T
                  </th>
                  <th>
                    {(coin.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}T
                  </th>
                  <th>{coin.quotes.KRW.percent_change_24h.toFixed(2)}%</th>
                  <th>{coin.quotes.KRW.percent_change_7d.toFixed(2)}%</th>
                </tr>
              </thead>
            ))}
          </table>
        </table>
      )}
    </div>
  );
}

export default Home;
