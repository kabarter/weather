

function weather(city){
   fetch ('https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=7ed6f6627d7c40973c307b393360c74e')
    .then(function(resp) {return resp.json()})
   .then(function(data){
     weatherData(data);
   })
    .catch(function(){
        alert: "Please enter a new city"
    });
}

function weatherData(data){
   

    let fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
    let highMax = Math.round(((parseFloat(data.main.temp_max)-273.15)*1.8)+32);
    let lowMin = Math.round(((parseFloat(data.main.temp_min)-273.15)*1.8)+32);
    const dateObj = new Date();
     
    document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById('returnedLocation').innerHTML = data.name;
    document.getElementById('returnedTemp').innerHTML = fahrenheit + '&deg F currently';
    document.getElementById('highTemp').innerHTML = highMax + '&deg F is the High';
    document.getElementById('lowTemp').innerHTML = lowMin + '&deg F is the Low';
    document.getElementById('date').innerHTML = dateObj;

    //let iconCode = document.getElementById('icon').innerHTML= data.weather[0].icon;
   // icon.src="https://openweathermap.org/img/w" + iconCode +".png";
//}
  
window.onload = function(){
    weather(data);
}
}
    
   // let defaultCity = document.getElementById("defaultCity");
  //  defaultCity.addEventListener("click", function(){
  //      let savedLocation = document.getElementById('cityName').value;
  //      if (savedLocation != "");{
  //          localStorage.setItem('cityDflt', savedLocation);
  //          let message = document.getElementById('mesage');
  //          message.innerText = "Thank you. Your preferred location has been saved.";
  //      }
  //  })


/*const getWeather = async (city) =>{
    let citySearch = document.getElementById('cityName')
    cityName.innerText = '';
    const dataFetch = await fetch('https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid=7ed6f6627d7c40973c307b393360c74e');
    const data = await dataFetch.json(); {
        if (data.cod != "200") {
            let message = document.getElementById('message')
            message.innerHTML = "Please enter a different city name.";
        } else {
            document.getElementById('message')
            message.innerHTML = "";
            weather(city);
            weatherData(data);
            return data;
        }
    }
}

}*/

