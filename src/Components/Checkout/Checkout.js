import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { id, courseName, price, duration, image, description } = course;
    return (
        <div>
            <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg w-72 mx-auto" src={image} alt="" />

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{courseName}</h5>
                     <h1 className='text-xl font-semibold font-sans text-gray-100'>Course fee: {price}</h1>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {
                            description.length > 100 ?
                                <p >{description.slice(0, 100) + '... '}<Link to={`/courses/${id}`} className='text-yellow-500 font-bold'>See more </Link></p>
                                : <p>{description}</p>
                        }
                    </p>
                    
                    <button className='bg-gray-400 px-2 rounded-xl font-semibold' ><Link to='/shipping'>Start Now</Link></button>

                </div>
            </div>
        </div>
    );
};

export default Checkout;