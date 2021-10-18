import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className='section'>
                <h1 className='fw-bold'>Contact Us</h1>
                <p className='fs-5'>Have queries before the appointment?</p>
            </div>

            <div className='row my-4 px-2'>
                <div className='col-12 col-md-4 text-center'>
                    <i className="fas fa-map-marker-alt fs-3 text-success mb-2"></i>
                    <h5 className='fw-bolder'>Our Address</h5>
                    <p>
                        Bangladesh <br />
                        Gec more, Chattogram.
                    </p>
                </div>
                <div className='col-12 col-md-4 text-center'>
                    <i className="fas fa-envelope fs-3 text-success mb-2"></i>
                    <h5 className='fw-bolder'>Let's Talk</h5>
                    <p>
                        Email: Info@evercare2021.Com <br />
                        Phone: +90 1234 567 89
                    </p>
                </div>
                <div className='col-12 col-md-4 text-center'>
                    <i className="fas fa-phone-square-alt fs-3 text-success mb-2"></i>
                    <h5 className='fw-bolder'>Our Timing</h5>
                    <p>
                        Mon-Fri 9:00 am to 6:00 pm <br />
                        Sat: 9:00 am to 2:00 pm <br />
                        Sunday: Closed
                    </p>
                </div>
            </div>

            <div className='text-center my-3'>
                <h3 className='fw-bolder'>Write Your Queries</h3>
                <input type="text" name="" placeholder='Enter your name' id="" className='my-2 mx-1' />
                <input type="email" name="" placeholder='Enter your email' id="" className='my-2' /> <br />
                <textarea name="" id="" cols="35" rows="5" placeholder=' Write your message'></textarea> <br />
                <button className='btn btn-success btn-lg px-5'>Send</button>
            </div>



        </div>
    );
};

export default Contact;