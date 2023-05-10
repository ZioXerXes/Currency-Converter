import { GetCurrencies } from "./Api";

const Converter = () => {
  GetCurrencies();
  return (
    <div className="container">
      <h1>Converter</h1>
      <div className="row">
        <div className="col-6">
          <p>Convert From...</p>
          <select id="selector1">
          </select>
        </div>
        <div className="col-6">
          <div className="row">
            <input placeholder="Amount1" className="col-12"></input>
            <button className="col-12">Switcheroo</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>to...</p>
          <select id="selector2">
          </select>
        </div>
        <div className="col-6">
          <div className="row">
            <input placeholder="Amount2" className="col-12"></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Converter;