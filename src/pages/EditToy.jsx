import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';

const EditToy = () => {
    const { user } = useContext(AuthContext);
    const editedToy = useLoaderData();
    const { toyName, quantity, price, description } = editedToy;
    const { id } = useParams()
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
        const updatedToyObject = { sellerName, sellerEmail, toyName, toyImg, rating, quantity, subCategory, price, description }
        console.log(updatedToyObject);

        fetch(`https://tiny-tales-server.vercel.app/toy/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedToyObject)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
            })
    }
    return (
        <div>
            <h4 className='text-center font-logo text-3xl font-bold uppercase pt-8'>Edit: {toyName}</h4>
            <p className='text-center pb-8 pt-2'>You can only edit <b>Price</b>, <b>Available quantity</b> and <b>Product description</b></p>
            <form onSubmit={handleAddToy} className='max-w-3xl mx-auto pb-6'>
                {/* <div className='flex p-2 gap-2'>
                    <input type="text" name='sellerName' placeholder="Seller name" value={user?.displayName} className="input border border-gray-300 w-full block" />
                    <input type="text" name='sellerEmail' placeholder="Seller email" value={user?.email} className="input border border-gray-300 w-full block" />
                </div>
                <div className='flex p-2 gap-2'>

                    <input type="text" name='toyName' value={toyName} placeholder="Toy Name" className="input border border-gray-300 w-full block" />
                    <input type="number" value={rating} name='rating' placeholder="Rating" min="1" step="0.1" max="5" className="input border border-gray-300 w-full block" />

                </div>
                <div className='flex p-2 gap-2'>
                    <input type="text" value={subCategory} name='subCategory' placeholder="Sub-category" className="input border border-gray-300 w-full block" />

                    <input type="url" value={toyImg} name='toyImg' placeholder="Toy URL" className="input border border-gray-300 w-full block " />
                </div> */}
                <div className='flex p-2 gap-2'>
                    <label className='w-1/2'> Price
                        <input type="text" defaultValue={quantity} name='quantity' placeholder="Update available quantity" className="input border border-gray-300 w-full block" />
                    </label>

                    <label className='w-1/2'>
                        Quantity
                        <input type="number" defaultValue={price} name='price' placeholder="Update price" className="input border border-gray-300 w-full block" />
                    </label>

                </div>
                <div className='p-2'>

                    <label>
                        Product description
                        <input type="text" defaultValue={description} name='description' placeholder="Updated description" className="input border border-gray-300 w-full block my-2 h-[80px]" />
                    </label>
                    <input rows="4" className="btn bg-black hover:bg-gray-800 w-full my-4" type="submit" value="Update toy info" />
                </div>
            </form>
        </div>
    );
};

export default EditToy;