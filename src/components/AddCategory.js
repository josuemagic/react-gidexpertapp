import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [InputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // El form manda el evento a "handleSubmit"
    const handleSubmit = (e) => {
        // Prevenir el comportamiento por defecto del formiulario
        e.preventDefault();

        if (InputValue.trim().length > 2) {
            setCategories(cats => [InputValue, ...cats]);
            setInputValue(""); // Limia el input

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={InputValue}
                    onChange={handleInputChange} // Cuando cambie hace esta funcion
                />
            </form>
        </>
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

