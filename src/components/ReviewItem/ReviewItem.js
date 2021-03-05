import React from 'react';

const ReviewItem = (props) => {
    console.log(props.product);
    const {name} = props.product[0];
    const {quantity} = props.product;
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
            <br/>
            <button className="cart-button">Remove</button>
        </div>
    );
};

export default ReviewItem;