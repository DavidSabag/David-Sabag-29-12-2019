import React from 'react';
import './styles/Autocomplete.css';

const Autocomplete = (props) => {
    return (

        <>
            <div
                className={props.suggestions.length === 0 ? 'hide' : 'auto-res'}>
                {
                    props.suggestions.map((citys) =>
                        <option
                            key={citys.Key}
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