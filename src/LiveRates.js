import { GetCurrencies, GetRates } from "./Api";

const LiveRates = () => {
  GetCurrencies();
  GetRates();
  return (
    <div className="container">
      <h1>Live Rates</h1>
      <div className="row">
        <div className="col-6">
          <p>Choose your currency:</p>
          <select id="selector3">
          </select>
          <button>Get Rates</button>
        </div>
        <div className="col-6">
          <ul id="box"></ul>
        </div>
      </div>
    </div>
  )
}

export default LiveRates;