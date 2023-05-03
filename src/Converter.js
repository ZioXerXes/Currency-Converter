const Converter = () => {
  return (
    <div className="container">
      <h1>Converter</h1>
      <div className="row">
        <div className="col-6">
          <p>Convert From...</p>
          <select name="currency1">
            <option value="pizza">Pizza</option>
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
          <select name="currency2">
            <option value="pizza">Pizza</option>
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