import React from 'react';

const Course = ({course}) => {
    const {courseName,duration,image}=course;
    return (
        <div className='border shadow-2xl rounded-2xl '>
            <div className="card w-96 glass flex gap-4">
                <figure><img className='w-44 h-56' src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h1 className='text-lg'>{courseName}</h1>
                    <h2 className="card-title text-xl font-semibold">{duration}</h2>
                   
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-cyan-900 text-xl text-white p-2 rounded-xl mt-10">See more</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;