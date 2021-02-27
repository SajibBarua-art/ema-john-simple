import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, product) => total + product.price, 0);

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }else if(total > 15){
        shipping = 4.99;
    } else if(total > 0) {
        shipping = 12.99;
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;

    return (
        <div>
           <h4>Order Summary</h4>
           <p>Items Ordered: {cart.length}</p>
           <p>Product Price: {formatNumber(total)}</p>
           <p>Shipping Cost: {formatNumber(shipping)}</p>
           <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
           <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;