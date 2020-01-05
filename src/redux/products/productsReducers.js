const initialState = {
    pending: false,
    products: [],
    favorites: [],
    city: "",
    error: null
}

export const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_PRODUCTS_PENDING":
            return {
                ...state,
                pending: true
            }

        case "FETCH_PRODUCTS_SUCCESS":
            return {
                ...state,
                pending: false,
                products: action.products
            }



        case "FETCH_PRODUCTS_SUCCESS_GET_CITY":
            return {
                ...state,
                pending: false,
                city: action.city
            }

        case "FETCH_PRODUCTS_ERROR":
            return {
                ...state,
                pending: false,
                error: action.error
            }

        case "UPDATE_FAVORITES":
            return {
                ...state,
                pending: false,
                favorites: action.favorites
            }

        default:
            return state;
    }
}

export default productsReducer;
