import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])
    // data load
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-4'>
            <Container>
                {/* services part title and data mapping */}
                <div className='my-4 text-center'>
                    <h1 className='fw-bold'>OUR <span className='text-warning'>EYE SERVICES</span></h1>
                    <h6>Our Services To Give Best Care For Your Eyes  <i className="fas fa-eye"></i></h6>

                </div>
                <Row xs={1} md={2} lg={3} className='g-4'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;