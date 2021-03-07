import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import orderDoneImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeItem = (productKey) => {
        const newCart = cart.filter((pd) => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    const [isOrderDone, setIsOrderDone] = useState(false);
    const handleOrderNow = () => {
        setCart([]);
        setIsOrderDone(true);
        processOrder();
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map((key) => {
            const product = fakeData.find((pd) => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])

    let orderSucceedImg;
    if (isOrderDone) { orderSucceedImg = <img src={orderDoneImage} alt="" /> }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        product={pd}
                        removeItem={removeItem}
                    ></ReviewItem>)
                }
                {
                    orderSucceedImg
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button
                        onClick={handleOrderNow}
                        className="cart-button"
                    >Order Now
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;