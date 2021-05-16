//declaracion de variables de input 
var latitud = document.getElementById("latitud");
var longitud = document.getElementById("longitud");
var city = document.getElementById("city");
// declaracion de variables para renderizar 
const divCity = document.getElementById("cityName");
const divLonLat = document.getElementById("lon&lat");
const divDatetime = document.getElementById("datetime");
const divTemp = document.getElementById("temp");
const divPrecip = document.getElementById("precip");
const divUv = document.getElementById("uv");
const divClouds = document.getElementById("clouds");
const divDescription = document.getElementById("description");
const divICon = document.getElementById("icon");
let h1 = document.createElement("h1");
let h3 = document.createElement("h3");
let h31 = document.createElement("h3");
let h32 = document.createElement("h3");
let h33 = document.createElement("h3");
let h34 = document.createElement("h3");
let h35 = document.createElement("h3");
let h36 = document.createElement("h3");
let h41 = document.createElement("h4");
let h42 = document.createElement("h4");
let h43 = document.createElement("h4");
let h44 = document.createElement("h4");
let h45 = document.createElement("h4");
let h46 = document.createElement("h4");
let imgIcon = document.createElement("img");
//toma de valor introducidos manualmente de las coordenadas 
let responseCoords = searchByCoords.addEventListener("click", inputEvent => {
    inputEvent.preventDefault();
    let valueLatitud = latitud.value;
    let valueLongitud = longitud.value;
    if (valueLatitud > 90){    //consultar valores maximo de latitud
        return alert("Latitude must be less than or equal to 90")
    }
    if (valueLatitud < (-90)){    //consultar valores maximo de latitud
        return alert("Latitude has to be greater than or equal to -90")
    }
    console.log(valueLatitud);   // print valores 
    if (valueLongitud < 0){       //consultar valores minimos de longitud
        return alert("Longitude has to be greater than or equal to 0");
    }
    if (valueLongitud > 180){     //consultar valores maximos de longitud
        return alert("Longitude has to be less than or equal to 180")
    }
    console.log(valueLongitud);
    
    if (valueLatitud > 180){    //consultar valores maximo de latitud
        return alert("Length has to be greater than or equal to 180")
    }
    return searchFunctionbByCoord(valueLatitud,valueLongitud);
});
//toma de valor de la ciudad introducida
let responseCity = searchByCity.addEventListener("click", inputEvent => {
    inputEvent.preventDefault();
    let valueCity = city.value;
    console.log(valueCity);
    if (valueCity.length >= 25 || /^\s+$/.test(valueCity) || /^([0-9])*$/.test(valueCity)){
        city.focus();
        city.style.backgroundColor="yellow";
        return alert("The " + valueCity + " value does not contain only letters");
    }
    return searchFunctionbByCity(valueCity);
})
// funcion con los valores por coordenadas - llamada a la api y obtencion de datos
var searchFunctionbByCoord = function (latitud,longitud){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const functionGPS = async function (requestOptions) {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitud}&lon=${longitud}&key=7014245f346848edbb5410140f8d441c&lang=es&units=M`, requestOptions)
        console.log(response.ok);
        console.log(response.status);
        const data = await response.json();
        console.log(data);
        const superData = data.data;
        console.log(superData);
        const cityName = superData[0].city_name;
        console.log(cityName);
        h1.textContent = `${cityName}`;
        divCity.appendChild(h1);
        const lon = superData[0].lon;
        console.log(lon);
        const lat = superData[0].lat;
        console.log(lat);
        h3.textContent = `Longitud = ${lon} Latitud = ${lat}`;
        divLonLat.appendChild(h3);
        const datetime = superData[0].datetime;
        console.log(datetime);
        h32.textContent = `Fecha y Tiempo`
        divDatetime.appendChild(h32);
        h42.textContent = `${datetime}`;
        divDatetime.appendChild(h42);
        const precip = superData[0].precip;
        console.log(precip);
        h31.textContent = `Precipitación`
        divPrecip.appendChild(h31);
        h41.textContent = `${precip}`;
        divPrecip.appendChild(h41);
        const uv = superData[0].uv;
        console.log(uv);
        h33.textContent = `Rayos UV`
        divUv.appendChild(h33);
        h43.textContent = `${uv}`;
        divUv.appendChild(h43);
        const clouds = superData[0].clouds;
        console.log(clouds);
        h34.textContent = `Nubes`
        divClouds.appendChild(h34);
        h44.textContent = `${uv}`;
        divClouds.appendChild(h44);
        const temp = superData[0].temp;
        console.log(clouds);
        h35.textContent = `Temperatura`
        divTemp.appendChild(h35);
        h45.textContent = `${uv} ºC`;
        divTemp.appendChild(h45);
        const weather = superData[0].weather;
        console.log(weather);
        const code = weather.code;
        console.log(code);
        const description = weather.description;
        console.log(description);
        const icon = weather.icon;
        console.log(icon);
        imgIcon.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
        divICon.appendChild(imgIcon);
    };
    functionGPS(requestOptions);
};
// funcion con los valores por ciudad - llamada a la api y obtencion de datos
var searchFunctionbByCity = function (valueCity){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const functionGPS = async function (requestOptions) {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?key=7014245f346848edbb5410140f8d441c&lang=es&units=M&city=${valueCity}`, requestOptions)
        console.log(response.ok);
        console.log(response.status);
        const data = await response.json();
        console.log(data);
        const superData = data.data;
        console.log(superData);
        const cityName = superData[0].city_name;
        console.log(cityName);
        h1.textContent = `${cityName}`;
        divCity.appendChild(h1);
        const lon = superData[0].lon;
        console.log(lon);
        const lat = superData[0].lat;
        console.log(lat);
        h3.textContent = `Longitud = ${lon} Latitud = ${lat}`;
        divLonLat.appendChild(h3);
        const datetime = superData[0].datetime;
        console.log(datetime);
        h32.textContent = `Fecha y Tiempo`
        divDatetime.appendChild(h32);
        h42.textContent = `${datetime}`;
        divDatetime.appendChild(h42);
        const precip = superData[0].precip;
        console.log(precip);
        h31.textContent = `Precipitación`
        divPrecip.appendChild(h31);
        h41.textContent = `${precip}`;
        divPrecip.appendChild(h41);
        const uv = superData[0].uv;
        console.log(uv);
        h33.textContent = `Rayos UV`
        divUv.appendChild(h33);
        h43.textContent = `${uv}`;
        divUv.appendChild(h43);
        const clouds = superData[0].clouds;
        console.log(clouds);
        h34.textContent = `Nubes`
        divClouds.appendChild(h34);
        h44.textContent = `${uv}`;
        divClouds.appendChild(h44);
        const temp = superData[0].temp;
        console.log(temp);
        h35.textContent = `Temperatura`
        divTemp.appendChild(h35);
        h45.textContent = `${temp} ºC`;
        divTemp.appendChild(h45);
        const weather = superData[0].weather;
        console.log(weather);
        const code = weather.code;
        console.log(code);
        const description = weather.description;
        console.log(description);
        const icon = weather.icon;
        console.log(icon);
        imgIcon.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
        divICon.appendChild(imgIcon);
    };
    functionGPS(requestOptions);
};
//accionar la toma de datos de coordenadas por el navegador y llamada a la api
let responseGPS = searchByGPS.addEventListener("click", inputEvent => {
    inputEvent.preventDefault();
    window.navigator.geolocation.getCurrentPosition(data => {
        const latitude = data.coords.latitude;
        const longitude = data.coords.longitude;
        console.log(latitude);
        console.log(longitude);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const functionGPS = async function (requestOptions) {
            const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=7014245f346848edbb5410140f8d441c&lang=es&units=M`, requestOptions)
            console.log(response.ok);
            console.log(response.status);
            const data = await response.json();
            console.log(data);
            const superData = data.data;
            console.log(superData);
            const cityName = superData[0].city_name;
            console.log(cityName);
            h1.textContent = `${cityName}`;
            divCity.appendChild(h1);
            const lon = superData[0].lon;
            console.log(lon);
            const lat = superData[0].lat;
            console.log(lat);
            h3.textContent = `Longitud = ${lon} Latitud = ${lat}`;
            divLonLat.appendChild(h3);
            const datetime = superData[0].datetime;
            console.log(datetime);
            h32.textContent = `Fecha y Tiempo`
            divDatetime.appendChild(h32);
            h42.textContent = `${datetime}`;
            divDatetime.appendChild(h42);
            const precip = superData[0].precip;
            console.log(precip);
            h31.textContent = `Precipitación`
            divPrecip.appendChild(h31);
            h41.textContent = `${precip}`;
            divPrecip.appendChild(h41);
            const uv = superData[0].uv;
            console.log(uv);
            h33.textContent = `Rayos UV`
            divUv.appendChild(h33);
            h43.textContent = `${uv}`;
            divUv.appendChild(h43);
            const clouds = superData[0].clouds;
            console.log(clouds);
            h34.textContent = `Nubes`
            divClouds.appendChild(h34);
            h44.textContent = `${uv}`;
            divClouds.appendChild(h44);
            const temp = superData[0].temp;
            console.log(clouds);
            h35.textContent = `Temperatura`
            divTemp.appendChild(h35);
            h45.textContent = `${uv} ºC`;
            divTemp.appendChild(h45);
            const weather = superData[0].weather;
            console.log(weather);
            const code = weather.code;
            console.log(code);
            const description = weather.description;
            console.log(description);
            const icon = weather.icon;
            console.log(icon);
            imgIcon.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
            divICon.appendChild(imgIcon);
        };
        functionGPS(requestOptions);
    })
})









// var searchFunctionbByCoord = async function (values){
//     const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${valueInput}`);
//     console.log(response.ok);
//     console.log(response.status);
//     // if aqui de la 33 
//     const data = await response.json();
//     console.log(data);
//     const pokemonName = data.name;
//     console.log(pokemonName)
//     const pokemonWeight = data.weight;
//     console.log(pokemonWeight);
//     const pokemonHeight = data.height;
//     console.log(pokemonHeight);
//     const pokemonSpecies = data.species.name;
//     console.log(pokemonSpecies);
// };


    // async function (city){
    // const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${valueInput}`);
    // console.log(response.ok);
    // console.log(response.status);
    // // if aqui de la 33 
    // const data = await response.json();
    // console.log(data);
    // const pokemonName = data.name;
    // console.log(pokemonName)
    // const pokemonWeight = data.weight;
    // console.log(pokemonWeight);
    // const pokemonHeight = data.height;
    // console.log(pokemonHeight);
    // const pokemonSpecies = data.species.name;
    // console.log(pokemonSpecies);

