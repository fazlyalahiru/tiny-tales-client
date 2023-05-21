import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/images/logo.png'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    const handleNewLetter = (event) => {
        event.preventDefault()
    }
    return (
        <>
            {/* news letter code starts */}
            <div className=" bg-gray-800">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto sm:text-center md:flex justify-around">

                        <h2 className="mb-4 text-xl text-center md:text-3xl tracking-tight font-bold text-white sm:text-4xl ">Sign up for our newsletter</h2>


                        <form onSubmit={handleNewLetter}>
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />



                                </div>
                                <div>
                                    <button className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border border-[#570df8] cursor-pointer bg-primary-700  sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            {/* news letter code starts */}
            <div className=' bg-[#E9F8FF] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid md:grid-cols-5 py-6  text-gray-300 border-b '>

                    <div className='px-5 md:px-3 pt-4'>
                        <h1 className='font-bold uppercase text-gray-500'>Products</h1>
                        <ul className='py-2 text-gray-800 text-sm grid gap-2'>
                            <Link to="/blog">Blogs</Link>
                            <li>About us</li>
                            <li>Contact</li>
                            <li>Opportunity</li>
                        </ul>
                    </div>
                    <div className='px-5 md:px-3 pt-4'>
                        <h1 className='font-bold uppercase text-gray-500'>Resources</h1>
                        <ul className='py-2 text-gray-800 text-sm grid gap-2'>
                            <li>Offers</li>
                            <li>Coupons</li>
                            <li>New arrivals</li>

                        </ul>
                    </div>
                    <div className='px-5 md:px-3 pt-4'>
                        <h1 className='font-bold uppercase text-gray-500'>Account</h1>
                        <ul className='py-2 text-gray-800 text-sm grid gap-2'>
                            <Link to="/all-toys"><li>All toys</li></Link>
                            <Link to="/my-toys"><li>My toys</li></Link>
                            <Link><li>Orders</li></Link>
                        </ul>
                    </div>
                    <div className='px-5 md:px-3 pt-4'>
                        <h1 className='font-bold uppercase text-gray-500'>Contact</h1>
                        <ul className='py-2 text-gray-800 text-sm grid gap-2'>
                            <li>Email: fazlyalahi.ru@gmail.com</li>
                            <li>Phone: +8801303359120</li>

                        </ul>
                    </div>
                    <div className='p-5 bg-gray-800 rounded mt-4 mr-2 md:mr-0'>
                        <Link to="/" className="flex items-center flex-shrink-0">
                            <img
                                className="h-6 w-6"
                                src={logo}
                            />
                            <h3 className='font-logo font-extrabold md:text-2xl text-xl ml-2 text-white hover:text-black'>TinyTales<sup className='text-xs ml-1 font-thin'>TM</sup></h3>
                        </Link>
                        <p className='py-2 text-sm'>Tity Tales is a multi-vendor e-commerce website. Here you will get all the accesories for your beloved baby. </p>
                    </div>
                </div>
                <div className='text-gray-500 text-xs text-center md:flex md:justify-between py-4'>
                    <p >@2023 Tiny Tales <sup>TM</sup>. All Rights Reserved</p>
                    <div className='flex gap-4 my-4 md:my-1 justify-center'>
                        <a href="https://www.linkedin.com/in/fazlyalahiru/"><FaLinkedin className='text-xl '></FaLinkedin></a>
                        <a href="https://github.com/fazlyalahiru"><FaGithub className='text-xl'></FaGithub></a>
                        <a href="https://www.facebook.com/fazlyalahiru/"><FaFacebook className='text-xl'></FaFacebook></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;