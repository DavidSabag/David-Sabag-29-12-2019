const apiKey ="VdYSGQ8CMzlgGl7hQ7QADNiKwvkKwNAS"
 
const endPointes = {
    autocomplete: (q) => `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${q}`,
    getCurrentWeather: (locationKey) => `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`,
    fiveDaysDailyForecasts: (locationKey) => `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`,
    geoPositonSearch: (lat,lon) => `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat}%2C${lon}`,
    getLatLon: new Promise((resulve) => {    
        navigator.geolocation.getCurrentPosition(coords => resulve(coords))
            
    })

}

export default endPointes;

