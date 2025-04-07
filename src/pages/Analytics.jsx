import { ArrowRight, ChevronDown, Plus } from 'lucide-react';
import React, { useState } from "react";

import {dataSets} from "../components/data.js";
import {Dropdown} from "../components/CustomDropdown.jsx";
import MapCard from "../components/MapCard.jsx";
import InsightCard from "../components/InsightCard.jsx";
import DemographicsCard from "../components/DemographicsCard.jsx";
import Demographics from "../components/DemographicsCard.jsx";
import WorldMap from "../components/DemographicsCard.jsx";


const demographics = [
    { country: 'India', percent: 40, color: 'bg-indigo-500', flag: '🇮🇳' },
    { country: 'USA', percent: 25, color: 'bg-orange-500', flag: '🇺🇸' },
    { country: 'CANADA', percent: 10, color: 'bg-yellow-500', flag: '🇨🇦' },
    { country: 'UAE', percent: 7, color: 'bg-green-500', flag: '🇦🇪' },
];

export default function Analytics() {
    const [metric, setMetric] = useState('Visitors'); // Initial primary metric
    const [range, setRange] = useState('Last 30 days'); // Initial range
    const [addMetric, setAddMetric] = useState(null); // Initial additional metric is null
    const [additionalMetricVisible, setAdditionalMetricVisible] = useState(false); // Toggle for second line

    const getData = (metric, range) => {
        return dataSets[metric][range] || dataSets[metric]['Last 30 days']; // Default to Last 30 days if range not found
    };

    const primaryData = getData(metric, range);
    const additionalData = additionalMetricVisible ? getData(addMetric, range) : [];

    // Calculate totals for display (simplified for demo)
    const getTotal = (data) => data.reduce((sum, entry) => sum + entry.value, 0) / data.length || 0;
    const primaryTotal = Math.round(getTotal(primaryData) / 100) * 100; // Round to nearest 100
    const additionalTotal = additionalMetricVisible ? Math.round(getTotal(additionalData) / 100) * 100 : 0;

    // Toggle additional metric visibility
    const handleAddMetricChange = (newMetric) => {
        setAddMetric(newMetric);
        setAdditionalMetricVisible(true); // Show the second line when a metric is added
    };

    return (
        <div className="px-10 py-8 text-white bg-[#1D1D1D] min-h-screen space-y-6">
            <h1 className="text-[28px] font-black mb-6">Overview</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                <MapCard handleAddMetricChange={handleAddMetricChange} metric={metric} additionalData={additionalData} additionalMetricVisible={additionalMetricVisible}
                primaryTotal={primaryTotal}
                additionalTotalVisible={additionalMetricVisible}
                primaryTotalVisible={primaryTotal}
                         setRange={setRange}
                         primaryData={primaryData}
                         setMetric={setMetric}
                         range={range}
                         additionalTotal={additionalTotal}

                />
                <InsightCard metric={metric} setMetric={setMetric}/>
            </div>
            <DemographicsCard/>
        </div>
    );
}