//const apiKey ="VdYSGQ8CMzlgGl7hQ7QADNiKwvkKwNAS"
//const apiKey ="78SA3oeY98EUGoxozRq3AOyGyI0cSUHJ"
const apiKey ="brCAsJAVyaTmy8bkCxNGSChAdPVG7RO4"
const endPointes = {
    autocomplete: (q) => `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${q}`,
    getCurrentWeather: (locationKey) => `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`,
    fiveDaysDailyForecasts: (locationKey) => `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`,
    geoPositonSearch: (lat,lon) => `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat}%2C${lon}`,
    getLatLon: new Promise((resulve) => {    
        navigator.geolocation.getCurrentPosition(coords => resulve(coords))
            
    })

}

export default endPointes;

