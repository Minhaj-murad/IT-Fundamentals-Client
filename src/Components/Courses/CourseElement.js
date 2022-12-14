import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courseelement = () => {
    const course = useLoaderData();
    const {id, courseName,duration,image,description}=course;
    console.log(course);
    return (
      
        <div className="card w-64 h-auto lg:w-56 lg:h-auto lg:mx-auto bg-base-100 shadow-2xl mt-12 " style={{width: '600px'}}>
        <figure><img className='w-64 h-24 ml-20 lg:w-48 lg:h-56 lg:mx-auto '  src={image} alt="Shoes" /></figure>
        <div className="card-body  w-64 h-auto ml-20 lg:w-auto lg:h-auto lg:mx-auto">
          <h2 className="card-title text-xl text-center font-serif font-semibold">{courseName}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
              <h1 className="card-title text-xl text-center font-serif font-semibold" >CourseTime:{duration}</h1> 
          </div>
          <button className='bg-amber-600 py-1 px-2 rounded-lg text-center w-auto font-semibold mx-auto flex items-center gap-4 border border-gray-700' ><Link to={`/courses/checkout/${id}`}>Get Premium Access </Link></button>
        </div>
      </div>
        );
    };

export default Courseelement;