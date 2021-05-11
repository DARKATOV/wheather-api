const simularRepuesta = {
    "data": [
        {
            "rh": 81,
            "pod": "n",
            "lon": -8.55,
            "pres": 975.2,
            "timezone": "Europe/Madrid",
            "ob_time": "2021-05-05 21:30",
            "country_code": "ES",
            "clouds": 84,
            "ts": 1620250200,
            "solar_rad": 0,
            "state_code": "58",
            "city_name": "Santiago de Compostela",
            "wind_spd": 1.5,
            "wind_cdir_full": "Oeste-Suroeste",
            "wind_cdir": "OSO",
            "slp": 1019,
            "vis": 5,
            "h_angle": -90,
            "sunset": "19:40",
            "dni": 0,
            "dewpt": 8.8,
            "snow": 0,
            "uv": 0,
            "precip": 0,
            "wind_dir": 240,
            "sunrise": "05:20",
            "ghi": 0,
            "dhi": 0,
            "aqi": 29,
            "lat": 42.87,
            "weather": {
                "icon": "c04n",
                "code": 804,
                "description": "Cubierto"
            },
            "datetime": "2021-05-05:21",
            "temp": 12,
            "station": "LEST",
            "elev_angle": -21.25,
            "app_temp": 12
        }
    ],
    "count": 1
};

function simularFetch(url){
    return Promise.resolve(simularRepuesta)
}

simularFetch()
.then(json => console.log(json.data[0]))