var weatherRequest = new XMLHttpRequest();
var weatherAPI = 'd2b7eaa4a13439c51d7cded7e34b2e98';
var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=4156210&units=imperial&APPID=' + weatherAPI;
weatherRequest.open('get',apiURL);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function(){
  var weatherData = weatherRequest.response;
  console.log(weatherData);

    document.getElementById('high').innerHTML = weatherData.list[0].main.temp_max;
    document.getElementById('low').innerHTML = weatherData.list[0].main.temp_min;
    document.getElementById('icon').innerHTML = weatherData.list[0].weather.icon;
    document.getElementById('wind').innerHTML = weatherData.list[0].wind.speed;
    document.getElementById('direction').innerHTML = weatherData.list[0].wind.deg;
}
