let city = document.getElementById('displayResults')

function weather(city){
    let key = '7ed6f6627d7c40973c307b393360c74e';
    fetch ('https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=7ed6f6627d7c40973c307b393360c74e')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        console.log(data);
    })
    .catch(function(){
    
    });
}
window.onload = function(){
    weather(city);
}

function weatherData(data){
    let fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
    document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById('returnedLocation').innerHTML = data.name;
    document.getElementById('returnedTemp').innerHTML = fahrenheit + 'deg';

}