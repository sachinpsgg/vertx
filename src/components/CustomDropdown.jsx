import React, {useState} from "react";
import clsx from "clsx";
import {ChevronDown, Plus} from "lucide-react";

export const Dropdown = ({ label, options, selected, setSelected, disabledOptions = [] }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative text-sm ">
            <button
                onClick={() => setOpen(!open)}
                className={clsx(
                    "flex items-center gap-3 px-3 py-1 text-[12px] bg-[#000000] text-white",
                    "border border-[#1D1D1D]",
                    {
                        "rounded-md": open === true,
                        "rounded-xl": open !== true,
                        "border-dashed": label === "Add",
                        "border-solid": label !== "Add",
                    },
                    open && ""
                )}
            >
                {label === "Add" && <Plus size={15} />}
                {label}
                <ChevronDown size={16} className="ml-1" />
            </button>

            {open && (
                <div className="absolute bg-[#000000] border border-zinc-700 rounded shadow-lg z-10">
                    {options.map((option) => (
                        <button
                            key={option}
                            disabled={disabledOptions.includes(option)}
                            onClick={() => {
                                setSelected(option);
                                setOpen(false);
                            }}
                            className={clsx(
                                "w-full text-left px-4 py-2 hover:bg-[#1D1D1D] font-semibold hover:text-[#FFFFFF] text-[#555555] text-[10px] ",
                                selected === option && "bg-[#1D1D1D] text-[#FFFFFF]"
                            )}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};