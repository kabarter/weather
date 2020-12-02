//let city = document.getElementById('displayResults')

function weather(city){
    fetch ('https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=7ed6f6627d7c40973c307b393360c74e')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        weatherData(data);
    })
   // .catch(function(){
    
    //});
}
window.onload = function(){
    weather(city);
}

function weatherData(data){
    let fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
    document.getElementById('description').innerHTML = data.weather[0].description;
    document.getElementById('returnedLocation').innerHTML = data.name;
    document.getElementById('returnedTemp').innerHTML = fahrenheit + ' deg';
    document.getElementById('icon').innerHTML = description.icon;

}

const search = document.querySelector('.searchCity');
search.addEventListener('keypress', setQuery);

function setQuery(event){
    if (event.keyCode == 13){
        getResults(search.value);
    }
}
function getResults (results){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${api.7ed6f6627d7c40973c307b393360c74e}')
    .then(results => {
        return results.json();
     }).then(displayResults);
}

function displayResults(weatherSearch) {
    let city = document.querySelector('.location .city');
    city.innerText = '${weatherSearch.name}, ${weatherSearch.sys.country}';
}