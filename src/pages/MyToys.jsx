import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])


    // Handle delte toy

    const handleDeleteToy = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/toy/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = myToys.filter(toy => toy._id !== id);
                    setMyToys(remaining)
                }
            })
    }
    const handleDesendingSort = () => {
        fetch(`http://localhost:5000/my-toy-des/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }
    const handleAscendingSort = () => {
        fetch(`http://localhost:5000/my-toy-asc/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }


    return (
        <div>
            <h4 className='text-center font-logo text-3xl font-bold uppercase py-8'>Your Toys</h4>
            <div class="tabs">
                <a class="tab tab-bordered">Tab 1</a>
                <a class="tab tab-bordered tab-active">Tab 2</a>
                <a class="tab tab-bordered">Tab 3</a>
            </div>
            <button onClick={handleDesendingSort}>Descending order</button>
            <button onClick={handleAscendingSort}>Ascending order</button>
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
                                myToys.map((toy, index) => <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.toyName}</td>
                                    <td>{toy.subCategory}</td>
                                    <td>{toy.price ? `$${toy.price}` : 'NA'}</td>
                                    <td>{toy.quantity ? toy.quantity : 'NA'}</td>
                                    <td>
                                        <div className='flex gap-4'>
                                            <div>
                                                <Link to={`/edit-toy/${toy._id}`}>
                                                    <button className='text-[#570df8]'>Edit</button>
                                                </Link>
                                            </div>
                                            <div>
                                                <button onClick={() => handleDeleteToy(toy._id)} className='text-red-700'>Delete</button>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;