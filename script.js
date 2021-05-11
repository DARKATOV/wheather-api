//declaracion de variables de input 
var latitud = document.getElementById("latitud");
var longitud = document.getElementById("longitud");
var city = document.getElementById("city");
//toma de valor introducidos manualmente de las coordenadas 
let responseCoords = searchByCoords.addEventListener("click", inputEvent => {
    inputEvent.preventDefault();
    let valueLatitud = latitud.value;
    let valueLongitud = longitud.value;
    if (valueLatitud < 0){       //consultar valores minimos de latitud
        return alert("Latitude has to be greater than or equal to 0");
    }
    if (valueLatitud > 90){    //consultar valores maximo de latitud
        return alert("Latitude must be less than or equal to 90")
    }
    if (valueLatitud < (-90)){    //consultar valores maximo de latitud
        return alert("Latitude has to be greater than or equal to -90")
    }
    console.log(valueLatitud);   // print valores 
    if (valueLongitud < 0){       //consultar valores minimos de longitud
        return alert("Latitude has to be greater than or equal to 0");
    }
    if (valueLongitud > 180){     //consultar valores maximos de longitud
        return alert("Length has to be greater than or equal to 180")
    }
    console.log(valueLongitud);
    
    if (valueLatitud > 180){    //consultar valores maximo de latitud
        return alert("Length has to be greater than or equal to 180")
    }
    return searchFunctionbByCoord(valueLatitud);
});
//toma de valor de la ciudad introducida
let responseCity = searchByCity.addEventListener("click", inputEvent => {
    inputEvent.preventDefault();
    let valueCity = city.value;
    if (valueCity.length >= 25 || /^\s+$/.test(valueCity) || /^([0-9])*$/.test(valueCity)){
        city.focus();
        city.style.backgroundColor="yellow";
        return alert("The " + valueCity + " value does not contain only letters");
    }
    return searchFunctionByCity(valueCity);
})
//accionar la toma de datos de coordenadas por el navegador 
let responseGPS = searchByGPS.addEventListener("click", inputEvent => {
    inputEvent.preventDefault();
    window.navigator.geolocation.getCurrentPosition(data => {
        const latitude = data.coords.latitude;
        const longitude = data.coords.longitude;
        console.log(latitude);
        console.log(longitude);
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

