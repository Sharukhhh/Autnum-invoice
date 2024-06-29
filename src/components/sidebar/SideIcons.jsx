import React from 'react'

const SideIcons = ({icon}) => {
    return (
        <div className='flex justify-center p-2 items-center cursor-pointer hover:bg-slate-200'>
            {icon}
        </div>
    )
}

export default SideIcons