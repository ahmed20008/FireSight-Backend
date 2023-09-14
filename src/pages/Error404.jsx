import React from 'react'
import { globalImages } from '../utils/staticImages';

const Error404 = () => {
    return (
        <div style={{ height: '100vh' }}>
            <div className='d-flex justify-content-center align-items-center'>
                <img className='img-fluid' style={{ width: '500px' }} src={globalImages.error404} alt="Error 404" />
            </div>
            <div className='text-center'>
                <button className='btn w-25' style={{ backgroundColor: '#F69A65', color: 'white' }}>
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default Error404;