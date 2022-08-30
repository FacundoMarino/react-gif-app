import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

    const [inputvalue, setInputValue ] = useState()


    const inputHandler = ({ target }) => {
        setInputValue( target.value )
    }

    const onSubmit = () => {
        if( inputvalue.trim().length <= 1 ) return
        onAddCategory(inputvalue)
        setInputValue('')
    }

    return (
    
    <form onSubmit={ (event) => event.preventDefault()}>
    
        <input 
            type="text"
            placeholder="Buscar Gif"
            onChange={ inputHandler }
            value={ inputvalue }
        />
        <button onClick={onSubmit}>Agregar</button>
    </form>
    
  )
}

