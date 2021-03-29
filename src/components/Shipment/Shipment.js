import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './Shipment.css';

const Shipment = () => {
const { register, handleSubmit, watch, errors } = useForm();
const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
    const savedCart = getDatabaseCart();
    console.log(loggedInUser);
    const orderDetails = {products: savedCart, shipment: data, orderTime: new Date() }

    fetch('https://young-basin-77903.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        processOrder();
        alert('Your ordered placed successfully!');
      }
    })
  };

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        <h4>Name: <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" /></h4>
        {errors.name && <span className="error">Name is required</span>}
        
        <h4>Email: <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" /></h4>
        {errors.email && <span className="error">Email is required</span>}
        
        <h4>Address: <input name="address" ref={register({ required: true })} placeholder="Your Address" /></h4>
        {errors.address && <span className="error">Address is required</span>}
        
        <h4>Phone Number: <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number"/></h4>
        {errors.phone && <span className="error">Phone number is required</span>}
        <input type="submit" />
    </form>
  );
};

export default Shipment;