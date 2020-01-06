import { useHistory } from 'react-router-dom';
import React from 'react';
import './styles/Favorites.css';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { updateGlobalState ,updateGlobalCity} from '../redux'
import endPointes from '../services/endpoints.js'
let images = require.context('../assets/icons', true);




const Favorites = (props) => {
    const History = useHistory()
    return (
        <>
            <div className="favorits-container">        </div>
            <div className="fav">
                {
                    props.favorites.map((favorit) => {

                        return (<Card
                            bg="light"
                            style={{ width: '18rem' }}
                            onClick={(event) => {
                                const cityKey = event.target.childNodes[2].innerHTML;
                                const cityName = event.target.childNodes[0].childNodes[0].innerHTML
                                console.log(cityName)
                                fetch(endPointes.fiveDaysDailyForecasts(cityKey))
                                    .then(res => res.json())
                                    .then(products => {
                                        props.updateGlobalState(products)
                                        props.updateGlobalCity(cityName)
                                        History.goBack()
                                    
                                    })

                            }}

                        >
                            <Card.Header><h3>{favorit.name} </h3></Card.Header>
                            <Card.Body>
                                <Card.Title> {favorit.temp} </Card.Title>

                                <img
                                    src={images(`./${favorit.Icon}.png`)}
                                    alt=""
                                />
                                <h3>{favorit.IconPhrase}</h3>



                            </Card.Body>
                            <p id={favorit.cityKey} hidden>{favorit.cityKey}</p>
                        </Card>
                        )
                    })

                }
            </div>

        </>
    );
}



const mapStateToProps = (state) => {
    return {
        favorites: state.products.favorites
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateGlobalState: (data) => dispatch(updateGlobalState(data)),
        updateGlobalCity: (city) => dispatch(updateGlobalCity(city))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites)
