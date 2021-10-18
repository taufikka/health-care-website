import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css'

const Service = props => {
    const { id, name, img, description } = props.service;

    const url = `/service/${id}`;

    return (
        <div>
            <Col className='card box-shadow'>
                <Card>
                    <Card.Img className='img-fluid' variant="top h-100" src={img} />
                    <Card.Body>
                        <Card.Title className='my-2'>{name}</Card.Title>
                        <Card.Text className='text-secondary'>
                            {description.slice(0, 78)}
                        </Card.Text>
                        <Link to={url}>
                            <Button className="my-2" variant="outline-warning">Read More</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col >
        </div >
    );
};

export default Service;