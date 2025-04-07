import {Dropdown} from "./CustomDropdown.jsx";
import LineChartContainer from "./LineChartContainer.jsx";
import React from "react";

export default function MapCard({metric,setMetric,range,setRange,addMetric,handleAddMetricChange,additionalMetricVisible,primaryTotal,additionalTotal,primaryData,additionalData}) {
    console.log(additionalTotal)
    return(
        <>
            <div className="bg-[#000000] p-4 rounded-2xl col-span-2">
                <div className="flex flex-col items-start justify-start">
                    <div className="flex gap-4 flex-wrap">
                        <Dropdown
                            label={metric}
                            options={['Visitors', 'Connections', 'Interactions', 'Impressions']}
                            selected={metric}
                            setSelected={setMetric}
                        />
                        <Dropdown
                            label={range}
                            options={['Today', 'Yesterday', 'This week', 'Last week', 'Last 7 days', 'Last 30 days']}
                            selected={range}
                            setSelected={setRange}
                        />
                        <Dropdown
                            label="Add"
                            options={['Connections', 'Interactions', 'Impressions']}
                            selected={addMetric || 'Add'}
                            setSelected={handleAddMetricChange}
                            disabledOptions={addMetric ? [addMetric] : []} // Disable already selected metric
                        />
                    </div>
                    <div className="flex flex-row py-2 gap-2">
                        <h3 className="text-[32px] font-black">{(primaryTotal / 1000).toFixed(2)}K</h3>
                        <p className="text-[#01754F] text-[12px] mt-1 flex flex-col">+469% <span className="text-[#555555] text-[12px]">(897)</span></p>
                        {additionalMetricVisible && (
                            <div className="flex flex-row gap-2">
                                <h3 className="text-[32px] font-black">{(additionalTotal / 1000).toFixed(2)}K</h3>
                                <p className="text-[#01754F] text-[12px] mt-1 flex flex-col">+180% <span className="text-[#555555] text-[12px]">(497)</span></p>
                            </div>
                        )}
                    </div>
                </div>
                <LineChartContainer
                    primaryData={primaryData}
                    additionalData={additionalData}
                    additionalVisible={additionalMetricVisible}
                />
            </div>
        </>
    );
}