import React from 'react';
import image from '../../../images/img1 .jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <div className="row background">
                <div className="col-12 col-md-5 d-flex align-items-center ps-5">
                    <div className='text-center'>
                        <h5>We are here for your eye care</h5>
                        <h1 className='fw-bold'>Your <span className='text-success'>Vision</span> is Our Passion.</h1>
                    </div>
                </div>
                <div className="col-md-7 col-12 text-center">
                    <img className='w-75' src={image} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Banner;