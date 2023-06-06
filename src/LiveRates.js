import { GetCurrencies, GetRates } from "./Api";

const LiveRates = () => {
  GetCurrencies();

  const rateGetter = () => {
    console.log("rateGetter");
    const money = document.querySelector('#selector3').value.substring(0,3);
    console.log(money);
    GetRates(money);
    const btn = document.querySelector('#btn');
    btn.innerHTML = "Get rates for 1 " + money;
  }

  return (  
    <div className="container mt-3">
      <h1>Live Rates</h1>
      <div className="row mt-3">
        <div className="col-6 mt-3">
          <p>Choose your currency:</p>
          <select id="selector3">
          </select>
          <button id="btn" className="button-45 mt-2" onClick={rateGetter}>Get Rates</button>
        </div>
        <div className="col-3">
          <ul id="box"></ul>
        </div>
        <div className="col-3">
          <ul id="box2"></ul>
        </div>
      </div>
    </div>
  )
}

export default LiveRates;