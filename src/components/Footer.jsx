import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <div className='flex items-center justify-between bg-[#00d1b2] md:py-12 text-white px-4 sm:px-6 lg:px-8'>
            <div><h3 className='font-logo font-extrabold md:text-3xl text-xl ml-2'>TinyTales.</h3></div>
            <div>
                <ul className='flex gap-8'>
                    <li>Home</li>
                    <li>Your toy</li>
                    <li>All toy</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='flex gap-4 text-xl'>
                <FaFacebook></FaFacebook>
                <FaWhatsapp></FaWhatsapp>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
            </div>
        </div>
        <div className='flex justify-between px-4 sm:px-6 lg:px-8 py-2 bg-[#00d1b2] border-t border-y-blue-700'>
            <div>
                <p>©2023 <i>TinyTales</i>. All rights reserved.</p>
            </div>
            <div>
                <p>Design and develped by <a href="">Fazly</a></p>
            </div>
        </div>
        </>
    );
};

export default Footer;