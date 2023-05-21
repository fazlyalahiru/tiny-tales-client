
import React, { useEffect, useState } from "react";
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import './Home.css'
import { Link } from "react-router-dom";


const Home = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [activeTab, setActiveTab] = useState("LEGO City");
    const handleActiveTab = (tabName) => {
        setActiveTab(tabName);
    };
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
                            <p>{toy.description}</p>
                            <div className="card-actions justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Rating className='text-orange-600'
                                        placeholderRating={toy.rating}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p className="text-xl">${toy.price}</p>
                                </div>
                                <Link to={`/toy/${toy._id}`} className='bg-gray-800 hover:bg-black text-white px-2 md:px-4 py-1 md:py-2 rounded hidden md:block'>View details<b className="ml-1">➝</b></Link>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
    );
};

export default Home;