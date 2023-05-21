
import React, { useEffect, useState } from "react";
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import './Home.css'
import { Link } from "react-router-dom";
import hero from '../../public/images/hero.png'
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';


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
    // AOS setup 
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Helmet>
                <title>Tiny Tales - Home</title>
            </Helmet>
            <div className="grid grid-cols-3 pt-8" data-aos="fade-in">
                <div className="col-span-2 mt-12 px-6">
                    <div className=" h-full flex-col items-center">
                        <h4 className=" font-bubble hero-text">Unleash Your Creativity, <br /> Brick by Brick</h4>
                        <p className="my-6 font-semibold text-lg">Tiny Tales provides amazing LEGO toys for your beloved baby! </p>
                        <Link to="/all-toys" className='bg-[#570df8] hover:bg-black text-white px-2 md:px-6 py-1 md:py-2 rounded'>All Products</Link>
                    </div>
                </div>
                <div >
                    <img src={hero} alt="" />
                </div>
            </div>
            <div className="px-6 pb-12" data-aos="fade-in">
                <h4 className="text-white text-center py-12 font-semibold text-4xl bg-gray-800">TinyTales at a glance</h4>
                <div className="stats shadow w-full text-center">

                    <div className="stat ">

                        <div className="stat-title">Listed products</div>
                        <div className="stat-value text-[#570df8] font-bubble">110+</div>

                    </div>

                    <div className="stat">

                        <div className="stat-title">Happy Clients</div>
                        <div className="stat-value text-[#570df8] font-bubble">25+</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Resell Partners</div>
                        <div className="stat-value text-[#570df8] font-bubble">200+</div>
                    </div>

                </div>
            </div>
            <div className=" bg-[#e9f8ff] rounded-sm px-6 " data-aos="fade-in">
                <h4 className="text-white text-center pt-12 py-6 font-semibold text-4xl bg-gray-800">Shop By Category</h4>
                <div className="tabs tabs-boxed justify-center bg-gray-800 border-0">
                    <a onClick={() => handleActiveTab("LEGO City")} className={`tab ${activeTab == "LEGO City" ? "tab-active" : " "}`}>LEGO City</a>
                    <a onClick={() => handleActiveTab("LEGO Star Wars")} className={`tab  ${activeTab == "LEGO Star Wars" ? "tab-active" : " "}`}>LEGO Star Wars</a>
                    <a onClick={() => handleActiveTab("LEGO Ninjago")} className={`tab  ${activeTab == "LEGO Ninjago" ? "tab-active" : " "}`}>LEGO Ninjago</a>

                </div>

                <div className="grid grid-cols-3 gap-6 justify-center items-center bg-white px-4 py-6">
                    {filteredData.map(toy => <div >
                        <div className="my-6 card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className="h-64" src={toy.toyImg} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{toy.toyName}</h2>
                                <p>{toy.description}</p>
                                <div className="card-actions justify-between items-center mt-4 mb-2">
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
                                    <Link to={`/toy/${toy._id}`} className='bg-[#570df8] hover:bg-black text-white px-2 md:px-4 py-1 md:py-2 rounded hidden md:block'>View details<b className="ml-1">➝</b></Link>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>

            </div>


            <div className="rounded-sm px-6 " data-aos="fade-in">
                <h4 className="text-white text-center py-12 font-semibold text-4xl bg-gray-800 mt-6">Hot Producats</h4>

                <div className="px-5 lg:px-32 lg:pt-12 bg-white py-6">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2 shadow">
                                <img

                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://m.media-amazon.com/images/I/8153mG+qVgL._AC_SX679_.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2 shadow">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://m.media-amazon.com/images/I/71M2yesGbML.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                            </div>
                            <div className="w-full p-1 md:p-2 shadow">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://m.media-amazon.com/images/I/81IzwKpqayL._AC_SX679_.jpg" />
                            </div>
                        </div>
                        <div className="flex w-1/2 flex-wrap shadow">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://m.media-amazon.com/images/I/91RaDysK8zL._AC_SX679_.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2 shadow">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://m.media-amazon.com/images/I/81i12VVBBcL.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2 shadow">
                                <img
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://m.media-amazon.com/images/I/81DNODTjH3L.__AC_SX300_SY300_QL70_FMwebp_.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-12 px-6" data-aos="fade-in">
                <h4 className="text-white text-center py-12 font-semibold text-4xl bg-gray-800 mt-6">Our Partners</h4>
                <div className="carousel carousel-end bg-white px-4 py-6">
                    <div className="carousel-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/408px-Google_2015_logo.svg.png?20160213081640" alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://seekvectorlogo.com/wp-content/uploads/2017/12/microsoft-vector-logo.png" alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png" alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png" alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/intel-logo.png" alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Drink" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;