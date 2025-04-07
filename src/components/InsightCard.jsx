import {Dropdown} from "./CustomDropdown.jsx";
import {ArrowRight} from "lucide-react";
import React from "react";

export default function InsightCard({metric,setMetric}) {
    return(
        <>
            <div className="bg-[#000000] p-6 rounded-2xl space-y-4 w-full min-w-0">
                <div className="flex flex-row justify-between items-center">
                    <h4 className="text-[20px] font-bold">Insights</h4>
                    <Dropdown
                        label={metric}
                        options={['Visitors', 'Connections', 'Interactions', 'Impressions']}
                        selected={metric}
                        setSelected={setMetric}
                    />
                </div>
                <div>
                    <p className="text-[#FFFFFF] text-[16px] font-semibold">Founders</p>
                    <p className="text-[32px] font-black flex flex-row gap-5 items-center">
                        7.4K
                        <span className="text-[#01754F] flex-col text-[12px] font-semibold">
                            <p>
                            +000%
                            </p>
                                <p className="text-[#555555]">
                            (000)
                            </p>
                            </span>
                    </p>
                </div>
                <div className="">
                    <p className="text-[#FFFFFF] text-[16px] font-semibold">Investors</p>
                    <p className="text-[32px] font-black flex flex-row gap-5 items-center">
                        6.09K
                        <span className="text-[#01754F] flex-col text-[12px] font-semibold">
                            <p>
                            +000%
                            </p>
                                <p className="text-[#555555]">
                            (000)
                            </p>
                            </span>
                    </p>
                </div>

                <div className="border-t border-[#1D1D1D] flex justify-end items-center">
                    <button className="text-[10px] font-semibold flex items-center gap-1 text-zinc-300 hover:underline mt-8">
                        View detailed insights <ArrowRight size={16} />
                    </button>
                </div>

            </div>
        </>
    );
}