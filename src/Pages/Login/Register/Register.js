import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');


    const { signInUsingGoogle, handleUserRegister } = useAuth();
    // form reload handle
    const handleSubmit = e => {
        console.log(email, password)
        e.preventDefault();
        // error show
        if (password.length < 6) {
            setError('password must be 6 character')
            return;
        }
    }
    // email input
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    // password input
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    // register click handler
    const handleRegister = () => {
        handleUserRegister(email, password, name)
    }
    // user name input
    const handleNameChange = e => {
        setName(e.target.value)
    }

    return (
        // user register form part
        <div className='w-50 mx-auto my-5'>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" />
                    </div>
                </div>
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

                <div className="my-2 text-danger fw-bold text-center">
                    {error}
                </div>
                <button type="submit" onClick={handleRegister} className="btn btn-success w-100">Register</button>
            </form>
            <p className='text-center text-danger fs-3 fw-bold'>or</p>

            <div className='text-center'>
                <Link to='/login'>
                    <button className="btn btn-success w-50 px-2 mx-2 my-2">Already have an account?</button>
                </Link>
            </div>

            <div className='text-center'>
                <button onClick={signInUsingGoogle} className="btn btn-success w-50 px-3 mb-5">Google Sign In</button>
            </div>

        </div>
    );
};

export default Register;