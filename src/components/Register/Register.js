import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>please register</h3>
            <form >
                <input type="text" placeholder='your name' /> <br />
                <input type="email" name="" placeholder='Your email' /><br />
                <input type="password" name="" placeholder='Password' /><br />
                <input type="submit" value="Register" />

            </form>
        </div>
    );
};

export default Register;