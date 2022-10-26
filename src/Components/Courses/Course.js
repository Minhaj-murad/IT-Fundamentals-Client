import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {id, courseName,duration,image,description}=course;
    return (
        <div className='border shadow-2xl rounded-2xl '>
            <div className="card w-96 glass  gap-4">
            <figure><img className='w-full h-56' src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h1 className='text-lg'>{courseName}</h1>
                    <h2 className="card-title text-xl font-semibold">{duration}</h2>
                    {
                        description.length>100 ?
                        <p >{description.slice(0,100) + '... '}<Link to={`/courses/${id}`} className='text-blue-900 font-bold'>See more </Link></p> 
                        : <p>{description}</p>
                    }
                    
                </div>
            </div>

        </div>
    );
};

export default Course;