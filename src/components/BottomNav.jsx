
import {Home, BarChart, Users, Briefcase, LayoutDashboard, ChartNoAxesCombined, Earth, Settings} from "lucide-react";

const icons = {
    dashboard: <LayoutDashboard size={20} />,
    analytics: <ChartNoAxesCombined size={20} />,
    connect: <Earth size={20} />,
    dealroom: <Briefcase size={20} />,
    profile: <Briefcase size={20} />,
    settings: <Settings size={20} />,
};

export default function BottomNav({ setActiveTab, className }) {
    return (
        <div className={`bg-zinc-900 p-2 flex justify-around items-center ${className}`}>
            {Object.keys(icons).map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} className="flex flex-col items-center text-xs hover:text-blue-400">
                    {icons[tab]}
                    <span className="capitalize">{tab}</span>
                </button>
            ))}
        </div>
    );
}
