import React from 'react';
import useAuth from '../../hook/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>HOME</h1>
            <h4>{user.displayName}</h4>
        </div>
    );
};

export default Home;