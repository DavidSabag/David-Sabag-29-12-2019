import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, updateFavorites, removeFavorites } from '../redux'
import Button from 'react-bootstrap/Button'
import './styles/CityForcast.css'
import ForeCastDetails from './ForeCastDetails'
let images = require.context('../assets/icons', true);



class CityForcast extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = React.createRef();
        this.state = {
            btnName: "Add to Favorites",
            isFirstLoad: true
        }

    }
    componentDidMount() {
        if(this.props.data.city === "")
            this.props.fetchProducts()
        
        if(this.isInFavorites(this.props.data.products.DailyForecasts)){
            this.setState({btnName:'Remove Favorit'})
        }
        
    }

    componentWillReceiveProps(nextProps) {
            if (this.props.data.city !== nextProps.data.city) {
                if (this.isInFavorites(nextProps.data.products.DailyForecasts)) {
                    this.setState({ btnName: "Add to Favorites" })
                }

            }
        
        
    }


    isInFavorites = (id = this.props.data.products.DailyForecasts) => {
        return this.props.data.favorites.find(fav => {
            return fav.id === id[0].EpochDate;
        })
    }


    toggleFavorites = () => {
        switch (this.state.btnName) {
            case "Add to Favorites":
                this.props.updateFavorites(this.props.data)
                this.setState({ btnName: "Remove Favorit" })
                break;

            case "Remove Favorit":
                const favorit = this.isInFavorites()
                if (favorit) {
                    this.props.removeFavorites(favorit, this.props.data.favorites)
                }
                this.setState({ btnName: "Add to Favorites" })
                break;
            
            default:       
        }
    }

    render() {
        return (
            this.props.data.pending ? (<h1>Loading</h1>) : this.props.data.error ? (<h1>{this.props.data.error}</h1>)
                : (
                    <>

                        <div className="forcast-container"></div>
                        <div className="forcast-header">
                            <div id="city">
                                <img src={images(`./${this.props.data.products.DailyForecasts ?
                                    this.props.data.products.DailyForecasts[0].Day.Icon : "24"}.png`)}
                                    alt=""
                                />
                                <h2>{this.props.data.products.DailyForecasts ? (
                                    this.props.data.products.DailyForecasts[0].Temperature.Minimum.Value + ' F') : ""}</h2>

                            </div>
                            <h2>{this.props.data.city}</h2>
                            <Button

                                ref={this.toggle}
                                type="submit"
                                variant="danger"
                                onClick={() => { this.toggleFavorites() }}

                            >{this.state.btnName}</Button>

                            <div className="card-container">
                                {
                                    this.props.data.products.DailyForecasts ?
                                        <ForeCastDetails days={this.props.data.products.DailyForecasts} /> : ""
                                }
                            </div>

                        </div>

                    </>
                )
        )

    }
}


const mapStateToProps = (state) => {
    return {
        data: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        updateFavorites: (location) => dispatch(updateFavorites(location)),
        removeFavorites: (favorite, data) => dispatch(removeFavorites(favorite, data))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityForcast)

