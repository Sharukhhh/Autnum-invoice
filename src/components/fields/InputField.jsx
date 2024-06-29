import React from 'react'

const InputField = ({type , label, placeholder}) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type={type}
            placeholder={placeholder}
            className='p-2 border rounded w-full'
            />
        </div>
    )
}

export default InputField