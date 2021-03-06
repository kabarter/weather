
 


function weather(city){
    fetch ('https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=7ed6f6627d7c40973c307b393360c74e')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        weatherData(data);
    })
   // .catch(function(){
        //alert: "Please enter a new city"
    //});
}
window.onload = function(){
  weather(city);
}


function weatherData(data){
    let fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
    let highMax = Math.round(((parseFloat(data.main.temp_max)-273.15)*1.8)+32);
    let lowMin = Math.round(((parseFloat(data.main.temp_min)-273.15)*1.8)+32);
    const dateObj = new Date();
    
    //let icon = 'http://openweathermap.org/img/wn/${data.weather[0].icon}.png';
   
  

    document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById('returnedLocation').innerHTML = data.name;
    document.getElementById('returnedTemp').innerHTML = fahrenheit + '&deg F currently';
    document.getElementById('highTemp').innerHTML = highMax + '&deg F is the High';
    document.getElementById('lowTemp').innerHTML = lowMin + '&deg F is the Low';
    document.getElementById('date').innerHTML = dateObj;
    

}

let iconCode = data.weather[0].icon[0];
let iconUrl = "http://openweathermap.org/img/w/${iconCode}.png";
$('#icon').attr('src', iconUrl);
document.getElementById('wicon').innerHTML=  iconCode;