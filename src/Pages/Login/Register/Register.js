import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const { signInUsingGoogle, handleUserRegister, } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegister = () => {
        handleUserRegister(email, password)
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label HtmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" />
                    </div>
                </div>
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
                    <button onClick={handleRegister} type="submit" className="btn btn-success w-100">Register</button>
                </Link>
            </form>
            <p className='text-center text-danger fs-3 fw-bold'>or</p>
            <div className='text-center'>
                <button onClick={signInUsingGoogle} className="btn btn-success w-50 px-3 mb-5">Google Sign In</button>
            </div>

        </div>
    );
};

export default Register;