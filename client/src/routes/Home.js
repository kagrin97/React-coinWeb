import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <h2>암호 화폐</h2>
      <div>
        <span>순위</span>
        <span>종목</span>
        <span>기호</span>
        <span>가격 KRW</span>
        <span>총 시가</span>
        <span>거래량 24h</span>
        <span>변동 24h</span>
        <span>변동 7d</span>
      </div>

      <div>
        {loading ? (
          <div>
            <h1> Coin is running......</h1>
          </div>
        ) : (
          <div>
            {coins.map((coin, index) => (
              <tr key={index}>
                <td>{coin.rank}</td>

                <Link to={`/detail/${index + 1}`}>{coin.name}</Link>

                <td>{coin.symbol}</td>
                <td>
                  {Number(coin.quotes.KRW.price.toFixed(0)).toLocaleString(
                    "en"
                  )}
                </td>
                <td>
                  {(coin.quotes.KRW.market_cap / 1000000000000).toFixed(2)}T
                </td>
                <td>
                  {(coin.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}T
                </td>
                <td>{coin.quotes.KRW.percent_change_24h.toFixed(2)}%</td>
                <td>{coin.quotes.KRW.percent_change_7d.toFixed(2)}%</td>
              </tr>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
