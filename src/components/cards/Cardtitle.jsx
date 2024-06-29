import React from 'react'
import Button from '../buttons/Button'

const Cardtitle = ({title , isApporval}) => {
    return (
        <>
            <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-2'>
                    <input type="checkbox" className='h-4 w-4' />
                    <h2 className='text-xl font-bold text-black'>{title}</h2>
                </div>
                {!isApporval && (
                    <Button text={'+  Attachment'}/>
                )}
            </div>
        </>
    )
}

export default Cardtitle