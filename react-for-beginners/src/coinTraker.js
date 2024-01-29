import { useState, useEffect } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [money, setMoney] = useState("");

  const onChange = (event) => setMoney(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(!loading);
        console.log(json);
      });
  }, []);
  // 아무것도 주시하고 있지 않으면(빈 배열) useEffect 코드는 한번만 실행됨
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${data.length})`}</h1>
      <input
        value={money}
        onChange={onChange}
        type="number"
        placeholder="가격을 입력하세요. (USD)"
      />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {data.map((data) => (
            <option>
              {data.name} ({data.symbol}) :{money / data.quotes.USD.price}{" "}
              {data.symbol}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Coin;
