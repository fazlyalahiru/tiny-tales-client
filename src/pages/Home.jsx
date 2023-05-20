
import React, { useEffect, useState } from "react";
import './Home.css'


const Home = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [activeTab, setActiveTab] = useState("LEGO City");
    console.log(filteredData);

    const handleActiveTab = (tabName) => {
        setActiveTab(tabName);
    };
    console.log(activeTab);
    useEffect(() => {
        fetch(`http://localhost:5000/all-toys/${activeTab}`)
            .then(res => res.json())
            .then(data => setFilteredData(data))
    }, [activeTab])
    return (
        <div className="max-w-7xl mx-auto">
            <div className="tabs tabs-boxed justify-center bg-gray-800">
                <a onClick={() => handleActiveTab("LEGO City")} className={`tab ${activeTab == "LEGO City" ? "tab-active" : " "}`}>LEGO City</a>
                <a onClick={() => handleActiveTab("LEGO Star Wars")} className={`tab  ${activeTab == "LEGO Star Wars" ? "tab-active" : " "}`}>LEGO Star Wars</a>
                <a onClick={() => handleActiveTab("LEGO Ninjago")} className={`tab  ${activeTab == "LEGO Ninjago" ? "tab-active" : " "}`}>LEGO Ninjago</a>

            </div>

            <div className="grid grid-cols-3 gap-6 justify-center items-center">
                {filteredData.map(toy => <div >
                    <div className="my-6 card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-64" src={toy.toyImg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{toy.toyName}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
    );
};

export default Home;