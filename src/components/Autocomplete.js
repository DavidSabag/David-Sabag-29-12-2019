import React from 'react';
import './styles/Autocomplete.css';

const Autocomplete = (props) => {
    return (

        <>
            <div
                className={props.suggestions.length === 0 ? 'hide' : 'auto-res'}>
                {
                    props.suggestions.map((citys, key) =>
                        <option
                            key={key}
                            onClick={(event) => {
                                event.currentTarget.parentNode.className = "hide";
                                props.handleChosenValue(event.target.value)

                            }}> {citys.LocalizedName}
                        </option>)
                }
            </div>

        </>

    );

}
export default Autocomplete;