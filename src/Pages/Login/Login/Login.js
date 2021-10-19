import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { resetPassword, setIsLoading, signInUsingGoogle, handleUserLogIn } = useAuth();

    // form reload handle
    const handleSubmit = e => {
        e.preventDefault();
    }
    // email input
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    // password input
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    // login click handler
    const handleLogIn = () => {
        handleUserLogIn(email, password)
    }
    // user forgot pass click handler 
    const handleResetPass = () => {
        resetPassword(email)
    }
    // private route login redirect handle
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/';

    // google login click handler
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_url)
            })
            .finally(() => setIsLoading(false))

    }


    return (
        // user login form part
        <div className='w-50 mx-auto my-5'>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <button type="submit" onClick={handleLogIn} className="btn btn-success w-100">Sign in</button>
            </form>

            <button className='btn btn-danger my-3' onClick={handleResetPass}>forgot password?</button>

            <p className='text-center text-danger fs-3 fw-bold'>or</p>
            <div className='text-center'>

                <Link to='/register'>
                    <button className="btn btn-success w-50 px-2 mx-2 my-2">Create New Account</button>
                </Link>

                <button onClick={handleGoogleLogIn} className="btn btn-success w-50 px-2 mb-5"> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;