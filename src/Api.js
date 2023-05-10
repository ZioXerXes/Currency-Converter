const GetRates = () => {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onload = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(JSON.parse(httpRequest.responseText)["rates"]);
        const ul = document.getElementById("box");
        const ratesDraw = JSON.parse(httpRequest.responseText)["rates"];
        const listNumber = Object.keys(ratesDraw).length;
        for (var i = 0; i < listNumber; i++) {
          const key = Object.keys(ratesDraw)[i];
          const value = Object.values(ratesDraw)[i]
          const li = document.createElement("li");
          li.appendChild(document.createTextNode(key + " : " + value));
          ul.appendChild(li);
        }
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

const GetCurrencies = () => {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onload = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(JSON.parse(httpRequest.responseText));
        const ul = document.querySelectorAll("#selector1, #selector2, #selector3");
        console.log(ul);
        const ratesDraw = JSON.parse(httpRequest.responseText);
        const listNumber = Object.keys(ratesDraw).length;
        for (var j = 0; j < ul.length; j++) {
          for (var i = 0; i < listNumber; i++) {
            const key = Object.keys(ratesDraw)[i];
            const value = Object.values(ratesDraw)[i]
            const li = document.createElement("option");
            li.appendChild(document.createTextNode(key + " : " + value));
            ul[j].appendChild(li);
          }
        }
      } else {
        console.log(httpRequest.statusText);
      }
    }
  }
  httpRequest.onerror = function() {
    console.log(httpRequest.statusText);
  }
  httpRequest.open('GET', 'https://api.frankfurter.app/currencies');
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

export { GetRates, GetCurrencies, Convert };