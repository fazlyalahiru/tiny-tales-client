import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import MyToysSingleRow from '../components/MyToysSingleRow';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])
    console.log(myToys);
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
                                myToys.map((toy, index) => <MyToysSingleRow toy={toy} index={index} key={index}></MyToysSingleRow>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;