import { GetCurrencies, Convert } from "./Api";

const Converter = () => {
  GetCurrencies();
  
  const handleClick = () => {
    const val1 = document.querySelector('#selector1').value;
    console.log(val1);
    const val2 = document.querySelector('#selector2').value;
    console.log(val2);
    const amt1 = document.querySelector('#Amount1').value;
    const amt2 = document.getElementById('Amount2');
    amt2.setAttribute('value', amt1);
    console.log(amt1 + amt2);
    console.log(val1 + val2);
    Convert(val1, val2)
  }
  
  return (
    <div className="container">
      <h1>Converter</h1>
      <div className="row">
        <div className="col-6">
          <p>Convert From...</p>
          <form id="currency1">
            <select id="selector1">
            </select>
          </form>
        </div>
        <div className="col-6">
          <div className="row">
            <input placeholder="Amount1" id="Amount1" className="col-12"></input>
            <button className="col-12" id="switcheroo" onClick={handleClick}>Switcheroo</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>to...</p>
          <form id="currency2">
            <select id="selector2">
            </select>
          </form>
        </div>
        <div className="col-6">
          <div className="row">
            <input placeholder="Amount2" id="Amount2" className="col-12"></input>
          </div>
        </div>
      </div>
    </div>
  )
  
}


export default Converter;