import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, updateFavorites } from '../redux'
import Button from 'react-bootstrap/Button'
import './styles/CityForcast.css'
import ForeCastDetails from './ForeCastDetails'
let images = require.context('../assets/icons', true);


const CityForcast = ({ data, fetchProducts }) => {
    //console.log(data.Favorites)
    useEffect(() => {
        fetchProducts()
    }, [])
    return data.pending ? (<h1>Loading</h1>)
        : data.error ? (<h1>{data.error}</h1>)
            : (
                <>
                    <div className="forcast-container"></div>
                    <div className="forcast-header">
                        <div id="city">
                            <img src={images(`./${data.products.DailyForecasts ?
                                data.products.DailyForecasts[0].Day.Icon : "24"}.png`)}

                            />
                            <h2>{data.products.DailyForecasts ?
                                data.products.DailyForecasts[0].Temperature.Minimum.Value + ' F' : ""}</h2>

                        </div>
                        <h2>{data.city}</h2>
                        <Button
                            variant="danger"
                            onClick={updateFavorites(data)}


                        >Add to Favorites</Button>

                        <div className="card-container">
                            {
                                data.products.DailyForecasts ?
                                    <ForeCastDetails days={data.products.DailyForecasts} /> : ""
                            }
                        </div>
                    </div>
                </>
            );

}

const mapStateToProps = (state) => {
    return {
        data: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        updateFavorites: (location) => dispatch(updateFavorites(location))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityForcast)


//export default userContainer;