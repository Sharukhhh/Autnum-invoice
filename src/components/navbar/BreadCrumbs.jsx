import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumbs = () => {
    return (
        <>
            <nav className='flex space-x-2 text-sm'>
                <a href="" className='text-gray-600'>Home</a>
                <MdKeyboardArrowRight size={20} className='text-gray-600'/>

                <a href="" className='text-gray-600'>Pay</a>
                <MdKeyboardArrowRight size={20} className='text-gray-600'/>

                <a href="" className='text-gray-600'>Invoice</a>
                <MdKeyboardArrowRight size={20} className='text-gray-600'/>

                <a href="" className='text-blue-500'>Invoice V1 ABC123</a>
            </nav>
        </>
    )
}

export default BreadCrumbs