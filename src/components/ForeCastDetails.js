import React from 'react';
import './styles/ForeCastDetails.css';
import Card from 'react-bootstrap/Card'
let images = require.context('../assets/icons', true);
const numToDay = {
    '0': 'Sun.',
    '1': 'Mon.',
    '2': 'Tue.',
    '3': 'Wed.',
    '4': 'Thu.',
    '5': 'Fri.',
    '6': 'Sat.'
}

const ForeCastDetails = (props) => {
    return (

        <>
            {
                props.days.map((day) => {

                    return (<Card bg="light" style={{ width: '18rem' }}>
                        <Card.Header><h3> {numToDay[(new Date(day.Date)).getDay()]}</h3></Card.Header>
                        <Card.Body>
                            <Card.Title> {day.Temperature.Minimum.Value +
                                ' - ' +
                                day.Temperature.Maximum.Value + ' F'}
                            </Card.Title>
                            <img
                                src={images(`./${day.Day.Icon}.png`)}
                                alt=""
                            />

                        </Card.Body>
                    </Card>
                    )
                })

            }

        </>

    );

}
export default ForeCastDetails;