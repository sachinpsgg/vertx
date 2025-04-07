import { useState } from "react";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Connect from "../pages/Connect";
import Dealroom from "../pages/Dealroom.jsx";
import Profile from "../pages/Profile.jsx";
import Settings from "../pages/Settings.jsx";
import Header from "./Header.jsx";


const tabs = {
    dashboard: <Dashboard />,
    analytics: <Analytics />,
    connect: <Connect />,
    dealroom: <Dealroom />,
    profile:<Profile />,
    settings: <Settings/>
};

export default function Layout() {
    const [activeTab, setActiveTab] = useState("profile");
    console.log(activeTab)

    return (
        <div className="flex h-screen bg-black text-white">
            <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} className="hidden md:flex" />
            <div className="flex-1 overflow-y-auto md:pb-4 bg-[#1D1D1D]">
                <Header activeTab={activeTab}/>
                {tabs[activeTab]}
            </div>
            <BottomNav setActiveTab={setActiveTab} className="fixed bottom-0 w-full md:hidden" />
        </div>
    );
}
