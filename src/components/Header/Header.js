import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let userState = 'Sign Out';
    if(loggedInUser){
        userState = 'Sign In';
    }
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>
                <button onClick={() => setLoggedInUser({})}>{userState}</button>
            </nav>
        </div>
    );
};

export default Header;
