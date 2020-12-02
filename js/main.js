function weather(city){
    let key = '7ed6f6627d7c40973c307b393360c74e';
    fetch ('api.openweathermap.org/data/2.5/weather?q=Boston&appid=7ed6f6627d7c40973c307b393360c74e')
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