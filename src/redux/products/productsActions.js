import axios from 'axios';
import endPointes from '../../services/endpoints'

const fetchProductsPending = () => {
    return {
        type: "FETCH_PRODUCTS_PENDING"
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        products: products
    }
}

const fetchProductsSuccessGetCity = (city) => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS_GET_CITY",
        city: city
    }
}



const fetchProductsError = (error) => {
    return {
        type: "FETCH_PRODUCTS_ERROR",
        error: error
    }
}

const updateFavoriteState = (favorites) => {
    return {
        type: "UPDATE_FAVORITES",
        favorites: favorites
    }
}

const updateCityKey = (cityKey) => {
    return {
        type: "UPDATE_CITY_KEY",
        cityKey: cityKey
    }
}



export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsPending)
        endPointes.getLatLon
            .then(geolocationDitailsPostion => {
                const { latitude, longitude } = geolocationDitailsPostion.coords;
                axios.get(endPointes.geoPositonSearch(latitude, longitude))
                    .then(res => {
                        dispatch(updateCityKey(res.data.Key))
                        dispatch(fetchProductsSuccessGetCity(res.data.LocalizedName))
                        axios.get(endPointes.fiveDaysDailyForecasts(res.data.Key))
                            .then(res => {
                                dispatch(fetchProductsSuccess(res.data))
                            })
                    })
                    .catch(err => {
                        dispatch(fetchProductsError(err.message));
                    })

            })

    }
}

export const updateGlobalState = (data) => {
    console.log(data)
    return (dispatch) => {
        dispatch(fetchProductsSuccess(data))
    }
}
export const updateGlobalCity = (city) => {
    return (dispatch) => {
        dispatch(fetchProductsSuccessGetCity(city))
    }
}

export const removeFavorites = (favoret, favorites) => {
    return (dispatch) => {

        const index = favorites.indexOf(favoret)
        favorites.splice(index,1)
        dispatch(updateFavoriteState(favorites))
    }
}

export const updateFavorites = (locationDitails) => {
    return (dispatch) => {
        let favorites = locationDitails.favorites
        let favoret = {}
        favoret.cityKey = locationDitails.cityKey;
        favoret.id = locationDitails.products.DailyForecasts[0].EpochDate
        favoret.name = locationDitails.city;
        favoret.currWeather = locationDitails.products.Headline.Category;
        favoret.temp = locationDitails.products.DailyForecasts[0].Temperature.Minimum.Value + ' - ' +
            locationDitails.products.DailyForecasts[0].Temperature.Maximum.Value + ' F ';
        favoret.Icon = locationDitails.products.DailyForecasts[0].Day.Icon;
        favoret.IconPhrase = locationDitails.products.DailyForecasts[0].Day.IconPhrase;
        favorites.push(favoret)
        dispatch(updateFavoriteState(favorites))
    }
}


export const updateKey = (key) => {
    return (dispatch) => {
        dispatch(updateCityKey(key))
    }
}

export const updateProducts = (key) => {
    return (dispatch) => {
        dispatch(fetchProductsSuccess(key))
    }

}
