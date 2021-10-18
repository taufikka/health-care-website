import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-dark text-white '>
            <div className="row footer">
                <div className="col-5">
                    <p className="ms-4 mt-4 fw-bolder">Follow us</p>
                    <div className='d-flex m-3 fs-3'>
                        <i className="fab fa-facebook-square m-2"></i>
                        <i className="fab fa-twitter-square m-2"></i>
                        <i className="fab fa-linkedin-in m-2"></i>
                    </div>
                </div>
                <div className="col-7 mt-4">
                    <div className='row'>
                        <div className='col-6'>
                            <small>Who We Are</small> <br />
                            <small>Our Mission</small> <br />
                            <small>Experience</small> <br />
                            <small>Our Doctors</small>
                        </div>
                        <div className='col-6'>
                            <small>Treatments</small> <br />
                            <small>Contact Us</small> <br />
                            <small>Appointments</small> <br />
                            <small>Privacy Policy</small>
                        </div>
                    </div>
                </div>
                <p className='ms-4'>COPYRIGHTS @2021 EVERCARE ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;