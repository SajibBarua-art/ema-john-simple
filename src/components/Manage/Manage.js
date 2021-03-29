import React from 'react';
import fakeData from '../../fakeData';

const Manage = () => {
    const handleAddProduct = () => {
        const product = {};
        fetch('https://young-basin-77903.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div>
            <form action="">
                <button onClick={handleAddProduct}>Add Product</button>
                <p><span>Name: </span><input type="text"/></p>
                <p><span>Price: </span><input type="text"/></p>
                <p><span>Quantity: </span><input type="text"/></p>
                <p><span>Product Image: </span><input type="file"/></p>
            </form>

        </div>
    );
};

export default Manage;