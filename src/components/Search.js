import React from 'react';
import './Search.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import mGlass from '../assets/mGlass.png'
import api from '../modules/api.js'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    onSearchChange = (event) => {
        const reg = new RegExp('[A-Za-z]')
        const searchValue = event.target.value;
        if (reg.test(searchValue)) {
            fetch(`${api.autocomplete}${searchValue}`)
                .then(res => res.json())
                .then(citys => { console.log(citys.forEach(city => console.log(city.LocalizedName))) })
        }


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

                        />
                    </InputGroup>
                </div>
            </>

        );
    }
}

export default Search;
