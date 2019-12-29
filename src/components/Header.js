import React from 'react';
import './Header.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';



class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="herolo-weather-task">Herolo Weather Task</h1>
                <ButtonToolbar>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
                        <ToggleButton value={2}>Radio 2</ToggleButton>

                    </ToggleButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}

export default Header;