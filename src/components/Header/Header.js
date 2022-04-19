import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Header.css';

const Header = () => {
    const {user , googleLogOut} = useAuth();
    return (
        <div className='header'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/shop'>Shipping</Link>
                    <Link to='/market'>Shop</Link>
                    <Link to='/login'>LoG-In</Link>
                   {user.email && <button onClick={googleLogOut}>Log Out</button>}
                   {user.email && <> welcome, {user.displayName}</> }
                </li>
            </ul>
        </div>
    );
};

export default Header;