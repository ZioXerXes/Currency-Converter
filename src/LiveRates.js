import { GetCurrencies, GetRates } from "./Api";

const LiveRates = () => {
  GetCurrencies();

  const rateGetter = () => {
    console.log("rateGetter");
    const btn = document.querySelector('#btn');
    const sb = document.querySelector('#chosenCurrency');
    btn.onclick = (event) => {
      event.preventDefault();
      alert(sb.selectedIndex);
    }
  }

  return (  
    <div className="container">
      <h1>Live Rates</h1>
      <div className="row">
        <div className="col-6">
          <p>Choose your currency:</p>
          <form id="chosenCurrency">
            <select id="selector3">
            </select>
            <button id="btn" onclick={rateGetter()}>Get Rates</button>
          </form>
        </div>
        <div className="col-6">
          <ul id="box"></ul>
        </div>
      </div>
    </div>
  )
}

export default LiveRates;