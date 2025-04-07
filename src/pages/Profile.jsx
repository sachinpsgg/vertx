import {User} from "lucide-react";
import Check from "../assets/check.png";
import Vertx from "../assets/vertx.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/x.png";
import Gmail from "../assets/mail.png";
import React from "react";

export default function Profile() {
    return (
        <>
            <div className="border-[#1D1D1D] md:border-t-1 ">
                <div className="main-dashboard px-10 py-8">
                    <h1 className="text-[28px] font-black mb-6">Overview</h1>
                    <div className="bg-[#000000] rounded-xl p-6 md:p-4 mb-6 border-2 border-[#272727]">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="p-8 sm:p-4">
                                <User className="fill-white" size={100}/>
                            </div>
                            <div className="flex flex-row md:flex-col py-4 md:justify-between justify-start md:items-start items-center gap-4">
                                <div className="text-center flex flex-col gap-1 items-start md:text-left">
                                    <div className="flex flex-row items-center justify-between gap-2 w-full">
                                        <h2 className="text-[24px] font-bold">Mr A</h2>
                                        <img src={Check} alt="X" className="w-6 h-6" />
                                    </div>

                                    <p className="text-[12px] text-white font-medium mt-1 flex items-center justify-center md:justify-start gap-1">
                                        Co-Founder & CEO @ Vertx
                                        <img src={Vertx} alt="X" className="w-4 h-4" />
                                    </p>

                                    <div className="bg-white text-black text-[10px] font-semibold px-2 py-0.5 inline-block mt-2 rounded">
                                        Entrepreneur
                                    </div>
                                </div>
                                <div className="flex gap-3 md:mt-0 mt-20">
                                    <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 object-contain" />
                                    <img src={Twitter} alt="Twitter" className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 object-contain" />
                                    <img src={Gmail} alt="Gmail" className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#000000] border border-zinc-800 rounded-xl p-7">
                            <h3 className="font-semibold text-[#FFFFFF] mb-2">Founded Companies</h3>
                            <p className="text-[64px] text-[#FFFFFF] font-bold">02</p>
                            <div className="flex justify-between items-start mt-4">
                                <div className="flex gap-3">
                                    <img src={Vertx} className="w-7 h-7  xs:w-3 xs:h-3 object-contain"/>
                                    <div>
                                        <p className=" text[18px] font-black">Vertx <span className="bg-[#579560] font-mono text-[#04470B] text-[8px] font-medium px-2 py-0.5 rounded ml-3">CEO</span></p>
                                        <p className="text-[10px] font-normal text-gray-300">Founded in 2025, in <span className="font-semibold">Fintech.</span></p>
                                    </div>
                                </div>
                                <a href="#" className="text-[8px] font-medium text-[#FFFFFF]">View Profile</a>
                            </div>
                            <div className="flex justify-between items-start mt-4">
                                <div className="flex gap-3">
                                    <img src={Vertx} className="w-7 h-7  xs:w-3 xs:h-3 object-contain"/>
                                    <div>
                                        <p className=" text[18px] font-black">Company <span className="bg-[#B1BDEB] font-mono text-[#10074F] text-[8px] font-medium px-2 py-0.5 rounded ml-3">PROPRIETOR</span></p>
                                        <p className="text-[10px] font-normal text-gray-300">Detail/Information<br/>like acquired /exit/m&a</p>
                                    </div>
                                </div>
                                <a href="#" className="text-[8px] font-medium text-[#FFFFFF]">View Profile</a>
                            </div>
                        </div>
                        <div className="bg-[#000000] border border-zinc-800 rounded-xl p-7">
                            <h3 className="font-semibold text-[#FFFFFF] mb-2">Experience</h3>
                            <p className="text-[64px] text-[#FFFFFF] font-bold">03</p>
                            <div className="flex justify-between items-start mt-4">
                                <div className="flex gap-3">
                                    <img src={Vertx} className="w-7 h-7  xs:w-3 xs:h-3 object-contain"/>
                                    <div>
                                        <p className=" text[14px] font-black">Company 1</p>
                                    </div>
                                </div>
                                <a href="#" className="text-[8px] font-medium text-[#FFFFFF]">View Profile</a>
                            </div>
                            <div className="flex justify-between items-start mt-4">
                                <div className="flex gap-3">
                                    <img src={Vertx} className="w-7 h-7  xs:w-3 xs:h-3 object-contain"/>
                                    <div>
                                        <p className=" text[14px] font-black">Company 2</p>
                                    </div>
                                </div>
                                <a href="#" className="text-[8px] font-medium text-[#FFFFFF]">View Profile</a>
                            </div>
                            <div className="flex justify-between items-start mt-4">
                                <div className="flex gap-3">
                                    <img src={Vertx} className="w-7 h-7  xs:w-3 xs:h-3 object-contain"/>
                                    <div>
                                        <p className=" text[14px] font-black">Company 3</p>
                                    </div>
                                </div>
                                <a href="#" className="text-[8px] font-medium text-[#FFFFFF]">View Profile</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
