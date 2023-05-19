import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const toyName = form.toyName.value;
        const rating = form.rating.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const description = form.description.value;
        const quantity = form.quantity.value;
        const toyImg = form.toyImg.value;
        const toyObject = { sellerName, sellerEmail, toyName, toyImg, rating, quantity, subCategory, price, description }

        fetch('http://localhost:5000/upload-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyObject)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
            })
    }
    return (
        <div>
            <h4 className='text-center font-logo text-3xl font-bold uppercase py-8'>Add A toy</h4>
            <form onSubmit={handleAddToy} className='max-w-3xl mx-auto pb-6'>
                <div className='flex p-2 gap-2'>
                    <input type="text" name='sellerName' placeholder="Seller name" value={user?.displayName} className="input border border-gray-300 w-full block" />
                    <input type="text" name='sellerEmail' placeholder="Seller email" value={user?.email} className="input border border-gray-300 w-full block" />
                </div>
                <div className='flex p-2 gap-2'>

                    <input type="text" name='toyName' placeholder="Toy Name" className="input border border-gray-300 w-full block" />
                    <input type="number" name='rating' placeholder="Rating" min="1" step="0.1" max="5" className="input border border-gray-300 w-full block" />

                </div>
                <div className='flex p-2 gap-2'>
                    <input type="text" name='subCategory' placeholder="Sub-category" className="input border border-gray-300 w-full block" />
                    <input type="number" name='price' placeholder="Price in $" className="input border border-gray-300 w-full block" />
                </div>
                <div className='flex p-2 gap-2'>
                    <input type="text" name='description' placeholder="Product Description" className="input border border-gray-300 w-full block" />
                    <input type="text" name='quantity' placeholder="Available Quantity" className="input border border-gray-300 w-full block" />
                </div>
                <div className='p-2'>
                    <input type="url" name='toyImg' placeholder="Toy URL" className="input border border-gray-300 w-full block my-2" />
                    <input className="btn bg-black hover:bg-gray-800 w-full my-2" type="submit" value="Add Toy" />
                </div>

            </form>
        </div>
    );
};

export default AddToy;