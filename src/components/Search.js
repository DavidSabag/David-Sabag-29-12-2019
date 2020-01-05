import React from 'react';
import './styles/Search.css';
import { connect } from 'react-redux';
import { updateGlobalState, updateGlobalCity } from '../redux'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import mGlass from '../assets/mGlass.png'
import endPointes from '../services/endpoints.js'
import Autocomplete from './Autocomplete';
import CityForcast from './CityForcast';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestions: [],
            chosenValue: "",
        }
        this.chosenValue = this.chosenValue.bind(this);
        this.input = React.createRef();
    }

    chosenValue = (value) => {
        this.setState({ chosenValue: value })
    }

    getLocationKey = () => {
        const inputValue = this.input.current.value
        this.props.updateGlobalCity(inputValue)

        const city = this.state.suggestions.find(segg => segg.LocalizedName === inputValue)
        fetch(endPointes.fiveDaysDailyForecasts(city.Key))
            .then(res => res.json())
            .then(forcasts => this.props.updateGlobalState(forcasts))

    }
    onSearchChange = (event) => {
        const reg = new RegExp('[A-Za-z]')
        const searchValue = event.target.value;
        this.setState({ chosenValue: searchValue })
        if (reg.test(searchValue)) {
            fetch(endPointes.autocomplete(searchValue))
                .then(res => res.json())
                .then(suggestions => this.setState({ suggestions: suggestions }))
                .catch(err => console.log(err))

        }
        else {
            this.setState({ suggestions: [] })
        }
    }

    render() {
        return (
            <>

                <div className="search-container">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend >
                            <Button
                                onClick={this.getLocationKey}
                                variant="outline-secondary"
                            >

                                <img src={mGlass} alt="" height="25" width="25" />
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl
                            ref={this.input}
                            aria-describedby="basic-addon2"
                            placeholder="Search Location"
                            onChange={this.onSearchChange}
                            value={this.state.chosenValue}

                        />
                    </InputGroup>

                </div>
                <Autocomplete
                    suggestions={this.state.suggestions}
                    handleChosenValue={this.chosenValue}
                />
                <CityForcast />

            </>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.products

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
)(Search)
