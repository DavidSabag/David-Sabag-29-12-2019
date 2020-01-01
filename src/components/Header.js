import React from 'react';
import { giveBackCake } from '../redux'
import { connect } from 'react-redux';
import './styles/Header.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const Header = (props) => {
    return (
        <>
            <div className="header">
                <h1 className="herolo-weather-task">Herolo Weather Task</h1>
                <div className="btn-container">
                    <ButtonToolbar >
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton onClick={props.giveBackCake} value={1}>Home</ToggleButton>
                            <ToggleButton value={2}>Favorites</ToggleButton>

                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        giveBackCake: () => dispatch(giveBackCake())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)




//export default Header;