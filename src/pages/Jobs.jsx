import React, { useEffect, useState } from "react";

const Jobs = () => {
    const [jobs, setJob] = useState([]);
    const [activeTab, setActiveTab] = useState("wars");

    const handleActiveTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (

        <div className="tabs flex justify-center items-center">
            <div
                onClick={() => handleActiveTab("city")}
                className={`tab  tab2 city ${activeTab == "city" ? " bg-[#00d1b2] text-white" : ""
                    }`}
            >
                LEGO City
            </div>
            <div
                onClick={() => handleActiveTab("wars")}
                className={`tab  tab2 wars ${activeTab == "wars" ? " bg-[#00d1b2] text-white" : ""
                    }`}
            >
                LEGO Star Wars
            </div>
            <div
                onClick={() => handleActiveTab("ninjago")}
                className={`tab  tab3 ninjago ${activeTab == "ninjago" ? " bg-[#00d1b2] text-white" : ""
                    }`}
            >
                LEGO Ninjago
            </div>
        </div>
    );
};

export default Jobs;