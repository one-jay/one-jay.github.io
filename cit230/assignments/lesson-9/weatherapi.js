var weatherRequest = new XMLHttpRequest();
var weatherAPI = 'd2b7eaa4a13439c51d7cded7e34b2e98';
var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=4156210&units=imperial&APPID=' + weatherAPI;
weatherRequest.open('get',apiURL);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function(){
  var weatherData = weatherRequest.response;
  console.log(weatherData);

    document.getElementById('current-temp').innerHTML = weatherData.list[0].main.temp;
}


