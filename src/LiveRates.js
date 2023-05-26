import { GetCurrencies, GetRates } from "./Api";

const LiveRates = () => {
  GetCurrencies();

  const rateGetter = () => {
    console.log("rateGetter");
    const money = document.querySelector('#selector3').value.substring(0,3);
    GetRates(money);
    const btn = document.querySelector('#btn');
  }

  return (  
    <div className="container">
      <h1>Live Rates</h1>
      <div className="row">
        <div className="col-6">
          <p>Choose your currency:</p>
          <select id="selector3">
          </select>
          <button id="btn" onClick={rateGetter}>Get Rates</button>
        </div>
        <div className="col-6">
          <ul id="box"></ul>
        </div>
      </div>
    </div>
  )
}

export default LiveRates;