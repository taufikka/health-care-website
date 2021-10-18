import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setIsLoading, signInUsingGoogle, handleUserLogIn } = useAuth();


    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleLogIn = () => {
        handleUserLogIn(email, password)
    }

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_url)
            })
            .finally(() => setIsLoading(false))

    }


    return (
        <div className='w-50 mx-auto my-5'>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label HtmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label HtmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>

                <Link to='/home'>
                    <button onClick={handleLogIn} type="submit" className="btn btn-success w-100">Sign in</button>
                </Link>
            </form>

            <p className='text-center text-danger fs-3 fw-bold'>or</p>
            <div className='text-center'>

                <Link to='/register'>
                    <button className="btn btn-success w-50 px-2 mx-2 my-2">Create New Account</button>
                </Link>

                <button onClick={handleGoogleLogIn} className="btn btn-success w-50 px-2 mb-5">Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;