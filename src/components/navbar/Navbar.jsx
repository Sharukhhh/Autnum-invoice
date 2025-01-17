import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import { TbMessage2Plus } from "react-icons/tb";
import { LuClock7 } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className='flex flex-col bg-white shadow-md'>
            <div className='px-4 py-2'>
                <BreadCrumbs/>
            </div>
            <div className='flex items-center justify-between h-16 px-4'>
                <h1 className='text-xl md:text-4xl font-bold text-black'>
                    <span className='text-slate-400'>Invoice Payment </span>#VI-ABC123  
                    <span className='bg-yellow-200 text-black text-center text-sm md:text-xl px-3 py-2 rounded-full'>
                        overdue
                    </span>
                </h1>
                <div className='flex items-center space-x-6'>
                    <input type="text" placeholder='Search...'
                    className='px-4 py-2 rounded border border-gray-300 focus:outline-none'
                    />
                    <LuClock7 size={20}/>
                    <TbMessage2Plus size={20}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar