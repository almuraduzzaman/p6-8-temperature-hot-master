// load weather data 
const loadWeatherData = async (cityName) => {
    const API_KEY = `45aa5629fd856daff54cff3b43dd14e6`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    const res = await fetch(URL);
    const data = await res.json();
    showWeatherData(data);
};

// set innerText by id 
const setInnerTextByID = (id, path) => {
    document.getElementById(id).innerText = path;
};

// get inputValue by id and loading data
const getInputValueByID_And_LoadData = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    loadWeatherData(inputFieldValue);
    inputField.value = '';
};

// show weather data on UI 
const showWeatherData = (data) => {
    setInnerTextByID('id-city', data.name ? data.name : data.message);
    setInnerTextByID('id-temperature', data.main ? data.main.temp : "Error");
    setInnerTextByID('id-condition', data.weather ? data.weather[0].main : "No Data Found");
};

// search button 
document.getElementById('btn-search').addEventListener('click', function () {
    getInputValueByID_And_LoadData('input-field');
});

// press enter in input field 
document.getElementById('input-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getInputValueByID_And_LoadData('input-field');
    }
});

// default city call 
loadWeatherData('Dhaka');