import React, { useState } from 'react';
import PropTypes from 'prop-types';


function AddCategory( {setCategories} ) {

    const [inputValue, setInputValue] = useState('One Punch');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho');
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue,...cats ]);
            setInputValue('')
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ handleInputChange }
        />
    </form>);
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
