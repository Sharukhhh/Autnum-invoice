import React from 'react'

const TotalBox = ({text , amount, isBalance}) => {
    return (
        <div className='bg-white p-4 rounded shadow flex flex-col border border-blue-400 items-center justify-center w-1/3'>
            <p className='text-lg font-medium'>{text}</p>
            <p className={`text-lg ${isBalance ? 'text-blue-500' : 'text-gray-500'}`}>{amount}</p>
        </div>
    )
}

export default TotalBox