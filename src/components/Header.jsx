import React, { useContext, useState } from 'react';
import logo from '../../public/images/logo.png'
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log('logout success');
            })
            .then(error => {
                console.log(error);
            })
    }
    const navLink = <>
        <Link to="/">
            <a
                href="#"
                className=" hover:bg-gray-700 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            >
                Home
            </a>
        </Link>
        <Link to="/">
            <a
                href="#"
                className=" hover:bg-gray-700 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            >
                All Toys
            </a>
        </Link>
        <Link to="/">
            <a
                href="#"
                className=" hover:bg-gray-700 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            >
                My Toys
            </a>
        </Link>
        <Link to="/">
            <a
                href="#"
                className=" hover:bg-gray-700 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            >
                Add a Toy
            </a>
        </Link>
    </>
    return (

        <nav className="bg-[#E9F8FF]">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 ">
                    <Link to="/" className="flex items-center flex-shrink-0">
                        <img
                            className="h-8 w-8"
                            src={logo}
                        />
                        <h3 className='font-logo font-extrabold md:text-3xl text-xl ml-2 text-[#8b3dff]'>TinyTales.</h3>
                    </Link>
                    <div className="flex items-center ">
                        <div className="hidden md:block w-full ">
                            <div className=" flex w-full  justify-center ml-10 ">

                                {navLink}

                            </div>
                        </div>

                    </div>
                    <div className='flex items-center justify-center gap-4'>

                        
                            <div className='avatar'>
                            <div className="w-8 rounded-full">
                               { user&&<img title={user?.displayName} src={user?.photoURL} />}
                            </div>
                        </div>
                        
                        {
                            user ? <button onClick={handleLogOut} className='bg-[#8b3dff] text-white px-2 md:px-6 py-1 md:py-2 rounded'>Logout</button> : <Link to='/login'>
                                <button className='bg-[#8b3dff] text-white px-2 md:px-6 py-1 md:py-2 rounded'>LogIn</button>
                            </Link>


                        }
                    </div>
                    <div className="-mr-2 flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black flex flex-col gap-4">
                            {navLink}
                        </div>
                    </div>
                )}
            </Transition>
        </nav>

    );
};

export default Header;