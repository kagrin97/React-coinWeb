import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";

function Seacrch() {
  const [coins, setCoins] = useState([]);
  let [search, setSearch] = useState([]);

  const getCoins = async () => {
    const json = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers?quotes=KRW`)
    ).json();
    setCoins(json.slice(0, 50));
  };

  const onChange = (e) => {
    let data = e.target.value;
    let filterData = coins.filter((i) =>
      i.name.toLowerCase().includes(data.toLowerCase())
    );
    if (data.length === 0) {
      filterData = [];
    }

    setSearch(filterData);
    onChange();
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <>
      <div className="all">
        <input placeholder="코인을 검색하세요" onClick={onChange}></input>
        <div className="search">
          {search.map((coin, index) => (
            <div className="links__div">
              <Link className="links" to={`/detail/${coin.rank}`}>
                {coin.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Seacrch;
