const API_KEY = `5049d79cc92ed04461568299eadb7b98`;
const inputField = document.getElementById('city-name');

const searchTemperature = () => {
    const city = inputField.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url)

    inputField.value = '';

    fetch(url)
        .then(res => res.json())
        .then(data => dispkayTemperature(data));
}

//function for setting innerText
const serInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

//function for load search Data
const dispkayTemperature = temperature => {
    console.log(temperature)
    serInnerText('city', temperature.name);
    serInnerText('temperature', temperature.main.temp);
    serInnerText('condition', temperature.weather[0].main);
    // set weather icon
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}