import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';

// import Rating from 'react-rating';

const ToyDetails = () => {
    const loadedSingleToy = useLoaderData()
    const { _id, toyImg, sellerName, toyName, subCategory, price, sellerEmail, quantity, description, rating } = loadedSingleToy;
    console.log(loadedSingleToy);
    return (
        <div class="grid grid-cols-3 gap-4 py-12">
            <div>
                <img src={toyImg} alt="" className='w-96 h-80 border rounded shadow' />
            </div>
            <div className='col-span-2'>
                <Rating className='text-orange-600'
                    placeholderRating={rating}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                />
                <h3 className='text-5xl font-logo font-bold'>{toyName}</h3>
                <p className='text-[#8b3dff] text-2xl font-semibold py-2'>${price}.00</p>
                <p>{description}</p>
                <button className='bg-[#8b3dff] text-white px-2 md:px-6 py-1 md:py-2 rounded my-4'>Order now</button>

                <p className='text-gray-500'>Category: {subCategory}</p>
                <p className='text-gray-500'>Stock: {quantity}</p>

            </div>
        </div>
    );
};

export default ToyDetails;