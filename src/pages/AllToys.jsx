import React, { useEffect, useState } from 'react';
import AllToysSingleRow from '../components/AllToysSingleRow';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    useEffect(() => {
        fetch('https://tiny-tales-server.vercel.app/all-toys')
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
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Action</th>
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