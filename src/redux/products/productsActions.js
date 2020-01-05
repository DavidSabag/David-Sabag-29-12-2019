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

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsPending)
        endPointes.getLatLon
            .then(geolocationDitailsPostion => {
                const { latitude, longitude } = geolocationDitailsPostion.coords;
                axios.get(endPointes.geoPositonSearch(latitude, longitude))
                    .then(res => {
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

export const updateGlobalState = (data) =>{
    return (dispatch) =>{
        dispatch(fetchProductsSuccess(data))
    }    
}
export const updateGlobalCity = (city) =>{
    return (dispatch) =>{
        dispatch(fetchProductsSuccessGetCity(city))
    }    
}


// Here I got a bug, if you could explain to me why I cant update the state i'll be happy :-)

export const updateFavorites = (locationDitails) =>{
    return (dispatch) =>{
        //console.log(locationDitails)
        let  favorites  = locationDitails.favorites
        let favoret = {}
        favoret.id = locationDitails.products.Headline.EffectiveEpochDate
        favoret.name = locationDitails.city;
        favoret.currWeather = locationDitails.products.Headline.Category;
        favorites.push(favoret)
        console.log(favorites)
        //dispatch( updateFavoriteState(favorites) )
    }    
}