function onChange(){
    document.getElementById('tbody').innerHTML = "";
  }

  var parsed;
    function getStudents() {
      var jsonFile = document.getElementById("fileName").value;
      console.log('input received: ' + jsonFile);
      if(jsonFile != 'json.txt' && jsonFile != 'json1.txt'){
        document.getElementById('help').style.color = 'red';
        document.getElementById('tbody').innerHTML = "";
      }else           document.getElementById('help').style.color = 'black';

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var response = this.responseText;
          //document.getElementById("jsonOutput").innerHTML = response;
          parsed = JSON.parse(response);
          console.log('parsed.students.length: ' + parsed.students.length);
          console.log('Object.keys(parsed): ' + Object.keys(parsed.students).length);
          var globalCounter = 0;
          var tbody = document.getElementById('tbody');

          for (var i = 0; i < Object.keys(parsed.students).length; i++) {
              var tr = "<tr>";
              tr += "<td>" + parsed.students[i].first + "</td>" 
                  + "<td>" + parsed.students[i].last + "</td>"
                  + "<td>" + parsed.students[i].address.city 
                  + ", " + parsed.students[i].address.state
                  + " " + parsed.students[i].address.zip  + "</td>"
                  + "<td>" + parsed.students[i].major + "</td>"
                  + "<td>" + parsed.students[i].gpa + "</td>";
              tr += "</tr>";
              tbody.innerHTML += tr;
          }

        }
      };
      //var countryFile = country.value + '.txt';
      console.log(jsonFile);
      xhttp.open("GET", jsonFile, true);
      xhttp.send();
    }

    function getCities(country) {
      console.log('country selected: ' + country.value);
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("cities").innerHTML = this.responseText;
        }
      };
      var countryFile = country.value + '.txt';
      console.log(countryFile);
      xhttp.open("GET", countryFile, true);
      xhttp.send();
    }

    ///////////////////////////////////////////////////////

    console.log(myFirstVar ? myFirstVar : 'myFirstVar is still ' + myFirstVar)//not in scope yet
    var myFirstVar = 'my first variable. it is global. '
    console.log('myFirstVar is now defined as: ' + myFirstVar)

    var mySecondVar = 'this is my second variable. it is also global. '
    console.log('mySecondVar: ' + mySecondVar)

    let myFirstLet = 'this is my first variable declared with let'
    console.log('myFirstLet: ' + myFirstLet)

    console.log(myFunction())
    function myFunction(){
        console.log(myFirstVar + 'still available inside the function? yes')
        console.log(mySecondVar + 'still available inside the function? yes')
        mySecondVar = 'new value for mySecondVar assigned in function.'

        
        var myThirdVar = 'this is my third variable. it has function scope'
        console.log('myThirdVar: ' + myThirdVar)
        
        console.log('myFirstLet in the function: ' + myFirstLet)
        
        if(myThirdVar){
            console.log('myThirdVar still has function scope inside this block, see: ' + myThirdVar)
        }

        
        var myFourthVar = 'this is my fourth  var'
        console.log('myFourthVar: ' + myFourthVar)

    }
    console.log(myFirstVar + ' still available after the function? yes')
    console.log(mySecondVar + ' still available after the function? yes, but its value was changed in the function')
    console.log(myThirdVar ? myThirdVar : 'myThirdVar is ' + myThirdVar + ', it is not available after the function') //no, undefined
    //console.log(myFourthVar + ' still available after the function?') //no, undefined

