import { useState } from "react"
import { PropTypes } from "prop-types";

export const AddCategory = ( { onNewCategory }) => {
    const [inputValue, setInputValue] = useState('OnePunch');

    const onChangeHandler = ( { target }) =>{
        setInputValue( target.value );
    }

    const onSubmitHandler = ( e )=>{
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length > 0){
            onNewCategory(newInputValue);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit = { onSubmitHandler } aria-label="form">                        
            <input 
                type="text"
                placeholder="Buscar gifs"
                value = { inputValue }
                onChange = { onChangeHandler }
            />
        </form>
        
    )
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}