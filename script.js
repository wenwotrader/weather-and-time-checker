const coordinatesMoscow = [55.7522, 37.6156]
let nameCity = document.getElementById('city-name');
let tempCity = document.getElementById('city-temp');
let tempMinCity = document.getElementById('city-temp__min');
let tempMaxCity = document.getElementById('city-temp__max');
let weatherCity = document.getElementById('city-weather');
let weatherImage = document.getElementById('weather-image');
let dtCity = document.getElementById('city-dates');
let gust = document.getElementById('gust');
let speed = document.getElementById('speed');

function convertTemperature(tm){
    return Math.round(tm - 273);
}
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinatesMoscow[0]}&lon=${coordinatesMoscow[1]}&appid=5d1a233c2b60973b0f8f7003ead2e100`)
.then(function(name){
    return name.json();
})
.then(function(name){
    nameCity.textContent = name.name;
    tempCity.innerHTML = `Temperature ${convertTemperature(name.main.temp)}&degC`;
    tempMinCity.innerHTML = `Min. temperature ${convertTemperature(name.main.temp_min)}&degC`;
    tempMaxCity.innerHTML = `Max. temperature ${convertTemperature(name.main.temp_max)}&degC`;
    weatherCity.innerHTML = name.weather[0].description;
    weatherImage.setAttribute('src', 'img/scattered cloudy.png')
    dtCity.innerHTML = new Date(name.dt * 1000);
    console.log(name);
});

// add setInterval(refresh, 60000)

