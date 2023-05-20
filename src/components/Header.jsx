import React, { useContext, useState } from 'react';
import logo from '../../public/images/logo.png'
import { Transition } from "@headlessui/react";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
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

        <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'hover:bg-gray-800 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium  mr-2' : 'hover:bg-gray-800 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium mr-2')}
        >
            Home
        </NavLink>


        <NavLink
            to='/all-toys'
            className={({ isActive }) => (isActive ? 'bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium mr-2' : 'hover:bg-gray-800 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium mr-2')}
        >
            All Toys
        </NavLink>
        {/* <Link to="/add-toy">
            <p
                href="#"
                className=" hover:bg-gray-700 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            >
                Add a Toy
            </p>
        </Link> */}

        <NavLink
            to='/my-toys'
            className={({ isActive }) => (isActive ? 'bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium mr-2' : 'hover:bg-gray-800 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium mr-2')}
        >
            My Toys
        </NavLink>
        <NavLink
            to='/blog'
            className={({ isActive }) => (isActive ? 'bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium' : 'hover:bg-gray-800 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium')}
        >
            Blog
        </NavLink>
    </>
    return (

        <nav className="bg-[#E9F8FF] border-b">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 ">
                    <Link to="/" className="flex items-center flex-shrink-0">
                        <img
                            className="h-8 w-8"
                            src={logo}
                        />
                        <h3 className='font-logo font-extrabold md:text-3xl text-xl ml-2 text-gray-800 hover:text-black'>TinyTales<sup className='text-xs ml-1'>TM</sup></h3>
                    </Link>
                    <div className="flex items-center ">
                        <div className="hidden md:block w-full ">
                            <div className=" flex w-full  justify-center ml-10 ">

                                {navLink}

                            </div>
                        </div>

                    </div>
                    <div className='flex items-center justify-center gap-4'>




                        {
                            user ? <div className='flex justify-center items-center gap-4'>
                                <Link to="/add-toy" className='bg-gray-800 hover:bg-black text-white px-2 md:px-6 py-1 md:py-2 rounded hidden md:block'>Add a toy <b>＋</b></Link>
                                <div className='avatar'>
                                    <div className="w-8 rounded-full">
                                        {user && <img title={user.displayName ? user.displayName : 'No name'} src={user?.photoURL} />}
                                    </div>
                                </div>
                                <FaSignOutAlt title='Logout' onClick={handleLogOut} className='cursor-pointer text-[#00d1b2]'></FaSignOutAlt>
                            </div> : <Link to='/login'>
                                <button className='bg-[#00d1b2] text-white px-2 md:px-6 py-1 md:py-2 rounded'>LogIn</button>
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
                            <Link to="/add-toy">
                                <p
                                    href="#"
                                    className=" hover:bg-gray-700 hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Add a Toy
                                </p>
                            </Link>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>

    );
};

export default Header;