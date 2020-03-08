    //Inputs
	var high = Number(document.getElementById("high").value);
	var low  = Number(document.getElementById("low").value);
    var wind = Number(document.getElementById("wind").value);
/*  Processing
    The formula to calculate the wind chill factor is:
    f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
    where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.
*/
    var avgTemp = (high + low) /2; 
    console.log("avgTemp= " + avgTemp);

    var windChill = 35.74 + (0.6215 * avgTemp)  - (35.75 * Math.pow(wind, 0.16)) + (0.4274 * avgTemp * Math.pow(wind, 0.16)); 
    console.log('windChill= ' + windChill);	
    //Output
	document.getElementById("windChillOut").innerHTML = windChill.toFixed(1);
