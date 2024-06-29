import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { GrHomeRounded , GrGroup } from "react-icons/gr";
import { BiChalkboard } from "react-icons/bi";
import { FiPieChart } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import SideIcons from './SideIcons';

const Sidebar = () => {
    return (
        <>
            <div className='fixed top-0 left-0 h-full w-16 flex flex-col border rounded-r-lg bg-slate-100 text-white shadow-lg'>
                <div className='flex flex-col items-center mt-10 space-y-3 flex-grow'>
                    <SideIcons icon={<IoSearchOutline color='black'/>} />
                    <SideIcons icon={<GrHomeRounded color='black'/>} />
                    <SideIcons icon={<BiChalkboard color='black'/>} />
                    <SideIcons icon={<FiPieChart color='black'/>} />
                    <SideIcons icon={<GrGroup color='black'/>} />
                    <SideIcons icon={<MdOutlineAccountCircle color='black'/>} />
                    <SideIcons icon={<HiOutlineSquaresPlus color='black'/>} />
                </div>
                <div className='flex flex-col items-center mb-10 space-y-3'>
                    <SideIcons icon={<SlSettings color='black'/>} />
                </div>
            </div>
        </>
    )
}

export default Sidebar