
import React, { useEffect, useState } from "react";
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import './Home.css'
import { Link } from "react-router-dom";
import hero from '../../public/images/hero.png'


const Home = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [activeTab, setActiveTab] = useState("LEGO City");
    const handleActiveTab = (tabName) => {
        setActiveTab(tabName);
    };
    useEffect(() => {
        fetch(`http://localhost:5000/filtered-toys/${activeTab}`)
            .then(res => res.json())
            .then(data => setFilteredData(data))
            // console.log(filteredData);
    }, [activeTab])
    return (
        <>
            <div className="grid grid-cols-3 pt-8">
                <div className="col-span-2 mt-12 px-6">
                    <div className=" h-full flex-col items-center">
                        <h4 className=" font-bubble hero-text">Unleash Your Creativity, <br /> Brick by Brick</h4>
                        <p className="my-6 font-semibold text-lg">Tiny Tales provides amazing LEGO toys for your beloved baby! </p>
                        <Link to="/add-toy" className='bg-[#570df8] hover:bg-black text-white px-2 md:px-6 py-1 md:py-2 rounded'>All Products</Link>
                    </div>
                </div>
                <div >
                    <img src={hero} alt="" />
                </div>
            </div>
            <div className=" bg-[#e9f8ff] shadow rounded-sm px-6 ">
                <h4 className="text-white text-center pt-12 py-6 font-semibold text-4xl bg-gray-800">Shop By Category</h4>
                <div className="tabs tabs-boxed justify-center bg-gray-800 border-0">
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

            <div>
                <div className="px-5 py-2 lg:px-32 lg:pt-24">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                            </div>
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;