import { GetCurrencies, Convert } from "./Api";

const Converter = () => {
  GetCurrencies();

  const handleClick = () => {
    const val1 = document.querySelector('#selector1').value.substring(0,3);
    //console.log(val1);
    const val2 = document.querySelector('#selector2').value.substring(0,3);
    //console.log(val2);
    const amt1 = document.querySelector('#Amount1').value;
    Convert(val1, val2, amt1)
  }

  return (
    <div className="container mt-3">
      <h1>Converter</h1>

      <div className="row mt-3">
        <div className="col-6 mt-3">
          <p>Convert From...</p>
          <form id="currency1">
            <select id="selector1">
            </select>
          </form>
        </div>
        <div className="col-6 bottom-box p-0">
            <input placeholder="Amount1" id="Amount1"></input>
        </div>
      </div>

      <div className="row my-4">
        <p className="col-6 mb-0">to...</p>
        <button className="col-3 button-45" id="switcheroo" onClick={handleClick}>Convert</button>
      </div>

      <div className="row">
        <div className="col-6 bottom-box">
          <form id="currency2">
            <select id="selector2">
            </select>
          </form>
        </div>
        <div className="col-6 bottom-box p-0">
            <input placeholder="Amount2" id="Amount2" readOnly="readonly"></input>
        </div>
      </div>
    </div>
  )
  
  

}


export default Converter;