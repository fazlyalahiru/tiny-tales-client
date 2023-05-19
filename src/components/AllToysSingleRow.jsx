import React from 'react';
import { Link } from 'react-router-dom';

const AllToysSingleRow = ({ toy, index }) => {
    const { _id, sellerName, toyName, subCategory, price, quantity } = toy;
    console.log(toy);
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price ? `$${price}` : 'NA'}</td>
            <td>{quantity ? quantity : 'NA'}</td>
            <td>
                <Link to={`/toy/${_id}`}>
                    <button >View Details</button>
                </Link>
            </td>

        </tr>
    );
};

export default AllToysSingleRow;