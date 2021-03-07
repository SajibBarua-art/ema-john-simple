import React from 'react';

const ReviewItem = (props) => {
    const {quantity, name, key, price} = props.product;
    const reviewItemStyle= {
        borderBottom: "1px solid lightgray",
        margin: "5px",
        paddingBottom: "5px",
        marginLeft: "200px"
    }
    return (
        <div style={reviewItemStyle}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>Single Price: {price}</p>
            <br/>
            <button onClick={() => props.removeItem(key)} className="cart-button">Remove</button>
        </div>
    );
};

export default ReviewItem;