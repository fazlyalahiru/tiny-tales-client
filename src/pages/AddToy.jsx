import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const AddToy = () => {
    // dropdown select option starts
    const toySubCategories = [
        "LEGO City",
        "LEGO Star Wars",
        "LEGO Ninjago",
        "LEGO Superheros",
        "LEGO Harry Potter"
    ];

    const [selectedCategory, setSelectedCategory] = useState(
        toySubCategories[0]
    );

    const handleSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedCategory(event.target.value);
    };

    // dropdown select option ends

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
        console.log(toyObject);

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
                    <label className='w-1/2'> Seller name
                        <input type="text" name='sellerName' placeholder="Seller name" value={user?.displayName} className="input border border-gray-300 w-full block mt-2" />
                    </label>
                    <label className='w-1/2'> Seller email
                        <input type="text" name='sellerEmail' placeholder="Seller email" value={user?.email} className="input border border-gray-300 w-full block mt-2" />
                    </label>
                </div>
                <div className='flex p-2 gap-2'>
                    <label className='w-1/2'> Toy name
                        <input type="text" name='toyName' className="input border border-gray-300 w-full block mt-2" />
                    </label>
                    <label className='w-1/2'> Rating
                        <input type="number" name='rating'  min="1" step="0.1" max="5" className="input border border-gray-300 w-full block mt-2" />
                    </label>
                </div>
                <div className='flex p-2 gap-2'>
                    <label className='w-1/2'> Sub category
                        <select
                            id="inputState"
                            name="subCategory"
                            className="form-select input border border-gray-300 w-full block mt-2"
                            value={selectedCategory}
                            onChange={handleSelectedValue}
                        >
                            {toySubCategories.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </label> 
                    <label className='w-1/2'>Toy price
                        <input type="number" name='price'  className="input border border-gray-300 w-full block mt-2" />
                    </label>
                </div>

                <div className='flex p-2 gap-2'>
                    <label className='w-1/2'> Quantity
                        <input type="text" name='quantity'  className="input border border-gray-300 w-full block mt-2" />
                    </label>
                    <label className='w-1/2'> URL
                        <input type="url" name='toyImg' className="input border border-gray-300 w-full block mt-2" />
                    </label>
                </div>

                <div className='p-2'>
                    <label > Description
                    <input type="text" name='description'  className="input border border-gray-300 w-full block my-2 h-[80px] mt-2" />
                    </label>
                    <input rows="4" className="btn bg-black hover:bg-gray-800 w-full my-4" type="submit" value="Add Toy" />
                </div>


            </form>
        </div>
    );
};

export default AddToy;