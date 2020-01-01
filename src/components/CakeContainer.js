import React from 'react';
import { buyCake } from '../redux'
import { connect } from 'react-redux';

const CakeContainer = (props) => {

    return (
        <>
            <h2>Number - {props.numOfCakes} </h2>
            <button onClick={props.buyCake}>Buy</button>

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
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)