import React, { useEffect, useState } from 'react';
import AllToysSingleRow from '../components/AllToysSingleRow';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/all-toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div>
            <h4 className='text-center font-logo text-3xl font-bold uppercase py-8'>All Toys</h4>
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
        </div>
    );
};

export default AllToys;