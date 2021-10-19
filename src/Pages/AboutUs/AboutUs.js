import React from 'react';
import image from '../../images/img2.jpg'

const AboutUs = () => {
    return (
        <div className='container'>
            {/* banner part */}
            <div className='row'>
                <div className="col-md-5 col-12">
                    <img className='w-75 my-4' src={image} alt="" />
                </div>
                <div className="col-12 col-md-7 d-flex align-items-center">
                    <div className='mx-2'>
                        <h3 className='fw-bolder'>About <span className='text-warning'>Evercare Eye Care Hospital</span></h3>
                        <h5>Mission:</h5>
                        <p>The mission of evercare eye care hospital is to be a centre of excellence <br /> in eye care services with a focus on extending equitable, affordable <br /> and advanced eye care in the world.
                        </p>
                        <h5>Vision:</h5>
                        <p>To create excellent and equitable eye care systems that reaches all those <br /> in needs.
                        </p>
                    </div>
                </div>
            </div>
            {/* title part */}
            <div className='my-4 text-center'>
                <h1 className='fw-bold'>MEET OUR<span className='text-warning'> DOCTORS</span></h1>
                <h6>We Have Best Professional Team To Care Your Eyes <i className="fas fa-eye"></i></h6>

            </div>
            {/* doctors and infos */}
            <div className="row row-cols-1 row-cols-md-2 g-5 my-4 d-flex justify-content-center">
                <div className="col" style={{ width: '400px', height: '450px' }}>
                    <div className="card">
                        <img src='https://www.soliseyecare.com/images/help/Dr.%20K%20Sridhar.jpg' className="img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr.K.Sridhar</h5>
                            <p className="card-text">Cataract, Cornea and Refractive Surgeon</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ width: '400px', height: '450px' }}>
                    <div className="card">
                        <img src="https://www.soliseyecare.com/images/help/doctor2.jpg" className="img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. M.M.Reddy</h5>
                            <p className="card-text">Glaucoma Ophthalmologist</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ width: '400px', height: '450px' }}>
                    <div className="card">
                        <img src="https://www.soliseyecare.com/images/help/doctor3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Aparna Ayyagari</h5>
                            <p className="card-text">Phaco – Refractive and Glaucoma Surgeon</p>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ width: '400px', height: '450px' }}>
                    <div className="card">
                        <img src="https://www.soliseyecare.com/images/help/doctor7.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Anand Kumar</h5>
                            <p className="card-text">Vitreo - Retina Surgeon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;