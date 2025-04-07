// components/Header.js
import React from 'react';
import VertxBlack from '../assets/vertx-black.png';
import {EllipsisVertical} from "lucide-react";
import {Popper,Box} from "@mui/material";

const Header = ({activeTab}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return (
<>
    <header className="bg-black text-white hidden md:flex justify-between items-center">
        <a href="#" className="hover:text-gray-300 py-2 px-5 text-[16px] font-semibold capitalize">{activeTab}</a>
        <nav className="flex">
            <a href="#" className="hover:text-gray-300 p-3 text-[16px] font-semibold  border-l-1 border-[#1D1D1D]">Activity</a>
            <a href="#" className="hover:text-gray-300 p-3 text-[16px] font-semibold  border-l-1 border-[#1D1D1D]">Log out</a>
        </nav>
    </header>
    {/*mobile header*/}
    <header className="bg-black text-white flex md:hidden justify-between items-center px-3 py-6">
        <div className="bg-white w-10 h-10 rounded-full"></div>
        <img src={VertxBlack} className="w-10 h-10"/>
        <EllipsisVertical size={25} onClick={handleClick}/>

    </header>
    <div className="bg-black text-white flex justify-between items-center lg:border-t-1 lg:border-[#272727]">
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide max-w-full">
            <nav className="flex">
                <a href="#" className="hover:text-gray-300 py-3 px-6 text-[16px] font-semibold  md:border-r border-[#1D1D1D]">
                    Overview
                </a>
                <a href="#" className="hover:text-gray-300 py-3 px-6 text-[16px] text-[#555555] font-semibold md:border-r border-[#1D1D1D]">
                    Portfolio
                </a>
                <a href="#" className="hover:text-gray-300 py-3 px-6 text-[16px] text-[#555555] font-semibold  md:border-r border-[#1D1D1D]">
                    Experience
                </a>
                <a href="#" className="hover:text-gray-300 py-3 px-6 text-[16px] text-[#555555] font-semibold  md:border-r border-[#1D1D1D]">
                    Media
                </a>
            </nav>
        </div>
        <div className=" sm:block">
            <a href="#" className="hover:text-gray-300 py-3 px-4 text-[16px] font-semibold border-l border-[#1D1D1D]">
                More
            </a>
        </div>
    </div>
</>
    );
};

export default Header;