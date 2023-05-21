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
        <div className="grid grid-cols-3 gap-4 py-12 max-w-6xl mx-auto">
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
                <h3 className='text-3xl font-logo font-bold'>{toyName}</h3>
                <p className='text-[#570df8] text-2xl font-semibold py-2'>${price}.00</p>
                <p>{description}</p>
                <button className='bg-[#570df8] text-white px-2 md:px-6 py-1 md:py-2 rounded my-4'>Order now</button>

                <p className='text-gray-500'><b>Category:</b> {subCategory}</p>
                <p className='text-gray-500'><b>Stock:</b> {quantity}</p>
                <p className='text-gray-500'><b>Seller name:</b> {sellerName}</p>
                <p className='text-gray-500'><b>Seller email:</b> {sellerEmail}</p>

            </div>
        </div>
    );
};

export default ToyDetails;