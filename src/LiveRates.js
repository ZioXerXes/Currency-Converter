import { GetCurrencies, GetRates } from "./Api";

const LiveRates = () => {
  GetCurrencies();

  const rateGetter = () => {
    const money = document.querySelector('#selector3').value.substring(0,3);
    GetRates(money);
    const message = document.querySelector('#message');
    message.innerHTML = "Rates for 1 " + money;
  }

  return (  
    <div className="container mt-3">
      <div className="row">
        <div className="col-6">
          <h1>Live Rates</h1>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <h2 id="message"></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <p>Choose your currency:</p>
          <select id="selector3">
          </select>
          <button id="btn" className="button-45 mt-2" onClick={rateGetter}>Get Rates</button>
        </div>
        <div className="list col-xs-6 col-md-3">
          <ul id="box"></ul>
        </div>
        <div className="list col-xs-6 col-md-3">
          <ul id="box2"></ul>
        </div>
      </div>
    </div>
  )
}

export default LiveRates;