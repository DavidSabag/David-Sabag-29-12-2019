import React from 'react';
import './Header.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const Header = () => {
    return (
        <>
            <div className="header">
                <h1 className="herolo-weather-task">Herolo Weather Task</h1>
                <div className="btn-container">
                    <ButtonToolbar >
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton value={1}>Home</ToggleButton>
                            <ToggleButton value={2}>Favorites</ToggleButton>

                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>
            </div>

        </>
    )
}



// class Header extends React.Component {
//     render() {
//         return (
//             <div className="header">
//                 <h1 className="herolo-weather-task">Herolo Weather Task</h1>
//                 <div className="btn-container">
//                     <ButtonToolbar >
//                         <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
//                             <ToggleButton value={1}>Home</ToggleButton>
//                             <ToggleButton value={2}>Favorites</ToggleButton>

//                         </ToggleButtonGroup>
//                     </ButtonToolbar>
//                 </div>
//             </div>
//         );
//     }
// }

export default Header;