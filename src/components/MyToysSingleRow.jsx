import React from 'react';
import { Link } from 'react-router-dom';

const MyToysSingleRow = ({ toy, index }) => {
    const { _id, sellerName, toyName, subCategory, price, quantity } = toy;
    const handleDeleteToy = ()=>{
        
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price ? `$${price}` : 'NA'}</td>
            <td>{quantity ? quantity : 'NA'}</td>
            <td>
                <div className='flex gap-4'>
                    <div>
                        <Link to={`/toy/${_id}`}>
                            <button className='text-[#8b3dff]'>Edit</button>
                        </Link>
                    </div>
                    <div>
                        <button onClick={handleDeleteToy} className='text-red-700'>Delete</button>
                    </div>
                </div>
            </td>

        </tr>
    );
};

export default MyToysSingleRow;