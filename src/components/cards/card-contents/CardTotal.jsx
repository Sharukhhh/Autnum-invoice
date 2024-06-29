import React from 'react'

const CardTotal = ({title}) => {
    return (
        <div className='bg-slate-200 p-2 mt-4 rounded-t-md flex justify-end text-black font-bold'>
            <span>{title} Payment total: 1000.00</span>
        </div>
    )
}

export default CardTotal