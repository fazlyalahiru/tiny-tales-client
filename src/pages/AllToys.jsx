import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from 'react';
import AllToysSingleRow from '../components/AllToysSingleRow';
import { useAsyncError } from 'react-router-dom';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])



    const handleSeach = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchText = form.search.value;
        fetch(`http://localhost:5000/all-toys/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
                form.reset();
            })

    }
    return (
        <>
            <Helmet>
                <title>Tiny Tales - All toys</title>
            </Helmet>

            <div>
                <h4 className='text-center font-logo text-3xl font-bold uppercase py-8'>All Toys</h4>

                <form className='w-1/2 mx-auto' onSubmit={handleSeach}>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div> */}
                        <input type="search" name='search' className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search toy by name" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#570df8] hover:bg-[#570df8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#570df8] dark:hover:bg-[#570df8] dark:focus:ring-blue-700">Search</button>
                    </div>
                </form >

                <div>
                    <div className="overflow-x-auto py-12">
                        <table className="table w-full">
                            {/* head */}
                            <thead >
                                <tr >
                                    <th className='bg-gray-800 text-white'>No.</th>
                                    <th className='bg-gray-800 text-white'>Seller</th>
                                    <th className='bg-gray-800 text-white'>Toy Name</th>
                                    <th className='bg-gray-800 text-white'>Sub-category</th>
                                    <th className='bg-gray-800 text-white'>Price</th>
                                    <th className='bg-gray-800 text-white'>Available Quantity</th>
                                    <th className='bg-gray-800 text-white'>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allToys.map((toy, index) => <AllToysSingleRow toy={toy} index={index} key={index}></AllToysSingleRow>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    );
};

export default AllToys;