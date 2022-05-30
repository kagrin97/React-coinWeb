import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState("");
  const [coinPrice, setCoinPrice] = useState("");
  const onChange = (event) => {
    setPrice(event.target.value);
  };
  const getCoinPrice = (event) => {
    setCoinPrice(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <from>
            <input
              value={price}
              onChange={onChange}
              placeholder="how much do you have"
            ></input>
          </from>
          <select onChange={getCoinPrice}>
            {coins.map((coin, index) => (
              <option key={index} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(4)}{" "}
                USD
              </option>
            ))}
          </select>
          <h2>coins you can buy :{price / coinPrice}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
