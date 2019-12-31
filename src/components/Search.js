import React from 'react';
import './Search.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import mGlass from '../assets/mGlass.png'
import api from '../modules/api.js'
import seggRes from '../assets/autocomplete.json'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            suggestions: [],
            chosenValue: ""
        }
    }


    onSearchChange = (event) => {
        const reg = new RegExp('[A-Za-z]')
        const searchValue = event.target.value;
        this.setState({chosenValue: searchValue})

        if (reg.test(searchValue)) {
            fetch(`${api.autocomplete}${searchValue}`)
                .then(res => res.json())
                .then(suggestions => this.setState({ suggestions: suggestions }))
                .catch(err => console.log(err))

        }
        else {
            this.setState({ suggestions: [] })
        }
        //this.setState({ suggestions: seggRes })


    }
    render() {
        return (
            <>
                <div className="search-container">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend >
                            <Button variant="outline-secondary">
                                <img src={mGlass} alt=""
                                    height="25"
                                    width="25"
                                />
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-describedby="basic-addon2"
                            placeholder="Search Location"
                            onChange={this.onSearchChange}
                            value={this.state.chosenValue}

                        />
                    </InputGroup>

                </div>
                <div
                    className={this.state.suggestions.length === 0 ? 'hide' : 'auto-res'}>
                    {
                        this.state.suggestions.map(citys => <option
                            onClick={(event) => this.setState({ chosenValue: event.target.value })}
                        > {citys.LocalizedName} </option>)
                    }
                </div>

            </>

        );
    }
}

export default Search;
