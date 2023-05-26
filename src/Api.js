const GetRates = (money) => {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onload = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const hole = document.getElementById("box");
        if (hole.childNodes.length != 0) {
          hole.innerHTML = "";
        }
        const moneyList = JSON.parse(httpRequest.responseText)["rates"];
        const howLong = Object.keys(moneyList).length;
        console.log(Object.values(moneyList));
        console.log(moneyList.length);
        for (var i = 0; i < howLong; i++) {
          const key = Object.keys(moneyList)[i];
          const value = Object.values(moneyList)[i]
          const li = document.createElement("li");
          li.appendChild(document.createTextNode(key + " : " + value));
          hole.appendChild(li);
        }
        }
      } else {
        console.log(httpRequest.statusText);
      }
    }
  httpRequest.onerror = function() {
    console.log(httpRequest.statusText);
  }
  httpRequest.open('GET', 'https://api.frankfurter.app/latest?from=' + money + '');
  httpRequest.send();
}

const GetCurrencies = () => {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onload = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        //console.log(JSON.parse(httpRequest.responseText));
        const ul = document.querySelectorAll("#selector1, #selector2, #selector3");
        const ratesDraw = JSON.parse(httpRequest.responseText);
        const listNumber = Object.keys(ratesDraw).length;
        for (var j = 0; j < ul.length; j++) {
          for (var i = 0; i < listNumber; i++) {
            const key = Object.keys(ratesDraw)[i];
            const value = Object.values(ratesDraw)[i];
            /*const value = Object.values(ratesDraw)[i]*/
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

var Convert = (choice1, choice2, amt1) => {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onload = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        //console.log(httpRequest.responseText);
        const nakedRate = Object.values(JSON.parse(httpRequest.responseText)["rates"]);
        //console.log("nakedRate " + Object.values(nakedRate['rates']));
        console.log(nakedRate)
        const amt2 = document.getElementById('Amount2');
        amt2.setAttribute('value', amt1 * Number(nakedRate));
      } else {
        console.log(httpRequest.statusText);
      }
    }
  }
  httpRequest.onerror = function() {
    console.log(httpRequest.statusText);
  }
  httpRequest.open('GET', 'https://api.frankfurter.app/latest?from='+choice1+'&to='+choice2+'');
  httpRequest.send();
}

export { GetCurrencies, GetRates, Convert };