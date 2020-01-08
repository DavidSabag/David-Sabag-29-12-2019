import React from 'react';

import './styles/Header.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <>

            <div className="header">
                <h1 className="herolo-weather-task">Herolo Weather Task</h1>
                <div className="btn-container" >
                    <ButtonToolbar >
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <Link
                                to={'/Weather-App/Home'}
                                >
                                <ToggleButton
                                    value={1}>Home
                                </ToggleButton>
                            </Link>
                            <Link
                                to={'/Weather-App/Favorites'}
                            >
                                <ToggleButton
                                    value={2}>Favorites
                                </ToggleButton>
                            </Link>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>
            </div>

        </>
    )
}

export default Header;


