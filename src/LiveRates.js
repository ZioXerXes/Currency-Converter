const LiveRates = () => {
  return (
    <div className="container">
      <h1>Live Rates</h1>
      <div className="row">
        <div className="col-6">
          <p>Choose your currency:</p>
          <select>
            <option value="Pizza">Pizza</option>
          </select>
          <button>Get Rates</button>
        </div>
        <div className="col-6">
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default LiveRates;