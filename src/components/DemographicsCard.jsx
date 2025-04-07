import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import {Dropdown} from "./CustomDropdown.jsx";
import React from "react";

const countries = {
    IN: 40,
    US: 25,
    CA: 10,
    AE: 7,
};

const markers = [
    { name: "India", latLng: [20.5937, 78.9629], color: "#5D3BFE" },
    { name: "USA", latLng: [37.0902, -95.7129], color: "#FF7E29" },
    { name: "CANADA", latLng: [56.1304, -106.3468], color: "#FFD056" },
    { name: "UAE", latLng: [23.4241, 53.8478], color: "#4CD08A" },
];

const colorScale = ["#2e2e2e", "#2e2e2e"];

export default function DemographicsMap() {
    return (
        <div className="bg-[#000000] p-4 rounded-xl w-full mx-auto">
            <div className="flex flex-col xl:flex-row gap-2">
                <div className="w-full  relative">
                    <h4 className="text-[20px] font-bold mb-2">Demographics</h4>
                    <Dropdown
                        label="Visitors"
                        options={['Visitors', 'Connections', 'Interactions', 'Impressions']}
                        selected="Visitors"
                        setSelected="Visitors"
                    />
                    <div className="w-full h-[250px] relative">
                        <VectorMap
                            map={worldMill}
                            backgroundColor="transparent"
                            containerStyle={{ width: "30%", height: "30%" ,padding: "200px" }}
                            markers={markers}
                            zoomButtons={false}
                            markerStyle={{
                                initial: {
                                    fill: "#fff",
                                    stroke: "#000",
                                    r: 6,
                                },
                                hover: {
                                    fill: "#fff",
                                    stroke: "#000",
                                },
                            }}
                            regionStyle={{
                                initial: {
                                    fill: "#1E1E1E",
                                    stroke: "#2E2E2E",
                                },
                            }}
                            series={{
                                regions: [
                                    {
                                        scale: colorScale,
                                        values: countries,
                                        min: 0,
                                        max: 100,
                                    },
                                ],
                            }}

                        />
                    </div>
                    <div className="absolute bottom-0  left-32 -translate-x-1/2 flex px-2 py-1 bg-[#000000] gap-4 flex-wrap rounded-full border-2 border-[#1D1D1D]">
                        {markers.map((m) => (
                            <div key={m.name} className="flex items-center gap-2 text-[12px] font-semibold text-white">
                                 <span
                                     className="w-3 h-3 rounded-full"
                                     style={{ backgroundColor: m.color }}
                                 ></span>
                                {m.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/3 space-y-8 items-center p-5 xl:w-full">
                    {Object.entries(countries).map(([code, percent]) => {
                        const country = markers.find((m) => m.name.toUpperCase().includes(code));
                        const name = country?.name || code;
                        const color = country?.color || "#ccc";
                        const flagUrl = `https://flagcdn.com/w40/${code.toLowerCase()}.png`;

                        return (
                            <div key={code} className="flex flex-row w-full justify-center items-center gap-3">
                                <div className="justify-center items-center flex">
                                    <img src={flagUrl} alt={name} className="w-12 h-7 rounded-sm" />
                                </div>
                                <div className="w-full">
                                    <div className="flex flex-row justify-between items-center">
                                        <h2 className="text-[#FFFFFF] text-[16px] font-semibold">{name}</h2>
                                        <p className="text-[#FFFFFF] text-[16px] font-semibold">{percent}%</p>
                                    </div>
                                    <div>
                                        <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${percent}%`, backgroundColor: color }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="pt-2  border-t border-[#1D1D1D] text-[10px] text-right text-[#FFFFFF] cursor-pointer hover:underline">
                        View all countries →
                    </div>
                </div>
            </div>
        </div>
    );
}
