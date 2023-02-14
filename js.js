//https://api.openweathermap.org/data/2.5/weather?lat=..&lon=..&appid=492413ece6989a6a98b81f0d531875ec

const lat = document.querySelector('.lat');
const lon = document.querySelector('.lon');
const searchBtn = document.querySelector('.search');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

async function getApi(lat, lon) {

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=492413ece6989a6a98b81f0d531875ec`;

    let data = await fetch(apiUrl).then(res => res.json());

    return data;
}

searchBtn.onclick = async function (e) {
    e.preventDefault();

    let data = await getApi(lat.value, lon.value);

    city.innerText = data.name;
    temp.innerText = data.main.temp;
    wind.innerText = data.wind.speed;
}