import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { GrHomeRounded , GrGroup } from "react-icons/gr";
import { BiChalkboard } from "react-icons/bi";
import { FiPieChart } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import { IoMdCube } from "react-icons/io";
import SideIcons from './SideIcons';

const Sidebar = () => {
    return (
        <>
            <div className='fixed top-0 left-0 h-full w-16 flex flex-col border rounded-r-lg bg-white hadow-lg'>
                <div className='flex flex-col items-center mt-10 space-y-3 flex-grow'>
                    <SideIcons icon={<IoMdCube color='violet' size={20} />} />
                    <span></span>
                    <span></span>
                    <SideIcons icon={<IoSearchOutline />} />
                    <SideIcons icon={<GrHomeRounded/>} />
                    <SideIcons icon={<BiChalkboard />} />
                    <span></span>
                    <SideIcons icon={<FiPieChart/>} />
                    <SideIcons icon={<GrGroup />} />
                    <SideIcons icon={<MdOutlineAccountCircle />} />
                    <SideIcons icon={<HiOutlineSquaresPlus />} />
                </div>
                <div className='flex flex-col items-center mb-10 space-y-3'>
                    <SideIcons icon={<SlSettings />} />
                </div>
            </div>
        </>
    )
}

export default Sidebar