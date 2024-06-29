import React from 'react'

const InputField = ({type , label, placeholder}) => {
    return (
        <div>
            <label htmlFor={label}>
                {label} <span className='text-red-500 font-semibold'>*</span>
            </label>
            <input type={type}
            placeholder={placeholder}
            className='p-2 border rounded w-full'
            />
        </div>
    )
}

export default InputField