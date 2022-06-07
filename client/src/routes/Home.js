import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bitCoin from "./img/bitcoin.png";
import eth from "./img/eth.png";
import usdt from "./img/usdt.png";
import doge from "./img/doge.png";
import "./Home.css";

function Home() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCoins = async () => {
    const json = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers?quotes=KRW`)
    ).json();
    setCoins(json.slice(0, 50));
    setLoading(false);
  };

  useEffect(() => {
    getCoins();
  }, []);
  return (
    <div className="root__div">
      <div className="titles">
        <div className="title">암호 화폐 50위</div>
        <img className="img" src={bitCoin}></img>
        <img className="img eth" src={eth}></img>
        <img className="img" src={usdt}></img>
        <img className="img doge" src={doge}></img>
      </div>
      {loading ? (
        <div className="loading">
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
                    ₩
                  </th>
                  <th>
                    {(coin.quotes.KRW.market_cap / 1000000000000).toFixed(2)}T
                  </th>
                  <th>
                    {(coin.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}T
                  </th>

                  {coin.quotes.KRW.percent_change_24h > 0 ? (
                    <th className="red">
                      {coin.quotes.KRW.percent_change_24h.toFixed(2)}%
                    </th>
                  ) : (
                    <th className="blue">
                      {coin.quotes.KRW.percent_change_24h.toFixed(2)}%
                    </th>
                  )}

                  {coin.quotes.KRW.percent_change_7d > 0 ? (
                    <th className="red">
                      {coin.quotes.KRW.percent_change_7d.toFixed(2)}%
                    </th>
                  ) : (
                    <th className="blue">
                      {coin.quotes.KRW.percent_change_7d.toFixed(2)}%
                    </th>
                  )}
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
