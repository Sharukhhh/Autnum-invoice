import React from 'react'

const Button = ({text}) => {
    return (
        text === 'Save' || text === 'Apply to all' ? (
            <button className='px-4 py-2 border shadow-md bg-blue-500 text-white rounded-md'>
                {text}
            </button>
        ) : (
            <button className='px-4 py-2 border shadow-md bg-slate-100 text-black rounded-md'>
                {text}
            </button>
        )
    )
}

export default Button