const apiKey = '78SA3oeY98EUGoxozRq3AOyGyI0cSUHJ'
//const apiKey ="brCAsJAVyaTmy8bkCxNGSChAdPVG7RO4"
//const apiKey = "xKh4TPpyd2xr1NjwxsAyGi5OAxFc6Wt0" 
 
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

