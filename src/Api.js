const GetRates = () => {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onload = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(JSON.parse(httpRequest.responseText)["rates"]);
      } else {
        console.log(httpRequest.statusText);
      }
    }
  }
  httpRequest.onerror = function() {
    console.log(httpRequest.statusText);
  }
  httpRequest.open('GET', 'https://api.frankfurter.app/latest?from=USD');
  httpRequest.send();
}


const Convert = () => {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onload = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);
      } else {
        console.log(httpRequest.statusText);
      }
    }
  }
  httpRequest.onerror = function() {
    console.log(httpRequest.statusText);
  }
  httpRequest.open('GET', 'https://api.frankfurter.app/latest?to=USD,EUR');
  httpRequest.send();
}

export { GetRates, Convert };