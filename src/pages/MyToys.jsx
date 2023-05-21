import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`https://tiny-tales-server.vercel.app/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])


    // Handle delte toy

    const handleDeleteToy = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Want to delete the toy?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#570df8',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tiny-tales-server.vercel.app/toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining)
                        }
                    })

            }
        })

    }


    // tab codes
    const [activeTab, setActiveTab] = useState("unsorte");
    const handleActiveTab = (tabName) => {
        setActiveTab(tabName);
        if (tabName == "descending") {
            fetch(`https://tiny-tales-server.vercel.app/my-toy-des/${user?.email}`)
                .then(res => res.json())
                .then(data => setMyToys(data))
        } else {
            fetch(`https://tiny-tales-server.vercel.app/my-toy-asc/${user?.email}`)
                .then(res => res.json())
                .then(data => setMyToys(data))
        }
    };


    return (
        <div>
            <Helmet>
                <title>Tiny Tales - My toys</title>
            </Helmet>
            <h4 className='text-center font-logo text-3xl font-bold uppercase py-8'>Your Toys</h4>
            <div className='flex gap-6 justify-end items-center '>

                <div className="tabs tabs-boxed items-center justify-center mx-2 px-4 py-4 bg-gray-800 text-white">
                    <h2 className='md:mr-4 inline-block'>Sort by price: </h2>
                    <a onClick={() => handleActiveTab("descending")} className={`tab tab-bordered ${activeTab == "descending" ? "tab-active" : " "}`}>Price high to low</a>
                    <a onClick={() => handleActiveTab("ascending")} className={`tab tab-bordered ${activeTab == "ascending" ? "tab-active" : " "}`}>Price low to high</a>

                </div>
            </div>

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