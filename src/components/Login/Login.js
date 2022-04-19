import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth();
    return (
        <div>
            <h3>please log in</h3>
            <button onClick={googleSignIn}>Google sign In</button> <br /> <br />

            <Link to='/register'>New User ..?</Link>

        </div>
    );
};

export default Login;