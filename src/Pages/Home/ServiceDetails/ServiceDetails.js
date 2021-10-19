import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    //  service id from dynamic route
    const { id } = useParams();

    const [data, setData] = useState([])

    // data load for details show
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // condition check existing service id with clicked service id
    const exactService = data.filter(service => service.id.toString() === id);

    return (
        <div>
            {/* service more details show */}
            <div className="card my-3 border-0">
                <div>
                    <div className='text-center'>
                        <img src={exactService[0]?.img} className="card-img-top w-50" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title fs-3 fw-bolder text-center">{exactService[0]?.name}</h5>
                        <p className="card-text px-5"> {exactService[0]?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;