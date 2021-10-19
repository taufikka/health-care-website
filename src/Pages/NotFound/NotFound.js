import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notfound.png'

const NotFound = () => {
    // not found page part
    return (
        <div className='text-center'>
            <img className='w-50' src={notFound} alt="" />
            <br />
            <Link to='/' >
                <button className='btn btn-danger my-3'>Back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;