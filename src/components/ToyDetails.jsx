import React, { useEffect } from 'react';

const ToyDetails = () => {
    useEffect(() => {
        fetch(`http://localhost:5000/toy/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
}, [])
return (
    <div>

    </div>
);
};

export default ToyDetails;