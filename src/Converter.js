import { GetCurrencies, Convert } from "./Api";

const Converter = () => {
  GetCurrencies();

  const handleClick = () => {
    const val1 = document.querySelector('#selector1').value.substring(0,3);
    const val2 = document.querySelector('#selector2').value.substring(0,3);
    const amt1 = document.querySelector('#Amount1').value;
    Convert(val1, val2, amt1)
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">Converter</h1>
      <div className="row mt-3">
        <div className="dad-box col-6 mt-3 mb-3">
          <p className="d-none d-sm-block mb-0">Convert From...</p>
        </div>
        <div className="col-6"></div>
        <div className="dad-box col-xs-12 col-md-6">
          <form id="currency1">
            <select id="selector1">
            </select>
          </form>
        </div>
        <div className="dad-box amount-box col-xs-12 col-md-6 bottom-box mt-1 mr-0">
            <input placeholder="Amount1" id="Amount1"></input>
        </div>
      </div>

      <div className="row my-4">
        <div className="dad-box align-bottom col-6 mb-0">
          <p className="mb-0 disappear">to...</p>
        </div>
        <div className="dad-box col-xs-12 col-md-6">
          <button className="button-45" id="switcheroo" onClick={handleClick}>Convert</button>
        </div>
      </div>

      <div className="row">
        <div className="dad-box col-md-6 col-sm-12 bottom-box">
          <form id="currency2">
            <select id="selector2">
            </select>
          </form>
        </div>
        <div className="dad-box amount-box col-md-6 col-sm-12 bottom-box mt-1">
            <input placeholder="Amount2" id="Amount2" readOnly="readonly"></input>
        </div>
      </div>
    </div>
  )
  
  

}


export default Converter;