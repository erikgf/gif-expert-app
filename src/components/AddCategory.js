import { useState } from "react"

export const AddCategory = ( { onAddCategory }) => {
    const [inputValue, setInputValue] = useState('OnePunch');

    const onChangeHandler = ( { target }) =>{
        setInputValue( target.value );
    }

    const onSubmitHandler = ( e )=>{
        e.preventDefault();
        const newInputValue = inputValue.trim();
        console.log(newInputValue);
        if (newInputValue.length > 0){
            onAddCategory(newInputValue);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit = { onSubmitHandler }>                        
            <input 
                type="text"
                placeholder="Buscar gifs"
                value = { inputValue }
                onChange = { onChangeHandler }
            />
        </form>
        
    )
};