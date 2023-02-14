//https://api.openweathermap.org/data/2.5/weather?lat=..&lon=..&appid=492413ece6989a6a98b81f0d531875ec

const lat = document.querySelector('.lat');
const lon = document.querySelector('.lon');
const searchBtn = document.querySelector('.search');
const city = document.querySelector('.city2');
const temp = document.querySelector('.temp2');
const wind = document.querySelector('.wind2');
const app = document.querySelector('.app');

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


    if (lat.value && lon.value) {
        let data = await getApi(lat.value, lon.value);
        if (data.cod !== 200) {
            city.innerText = '...';
            temp.innerText = '...';
            wind.innerText = '...';
        }

        else {
            city.innerText = data.name;
            temp.innerText = data.main.temp;
            wind.innerText = data.wind.speed;
        }


        if (data.main.temp > 288.888) {
            app.style.background = 'rgb(3, 105, 239)';
        }
    } else {
        alert('Please fill it out completely');

        if (lat.value === '') {
            lat.focus();
        } else {
            lon.focus();
        }

    }



}