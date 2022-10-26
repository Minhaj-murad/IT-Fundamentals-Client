import React from 'react';
import { Link } from 'react-router-dom';

const SideElement = ({course}) => {
    const {courseName,id} =course;
    return (
        <div className='mt-8 px-1 py-1 rounded-3xl bg-green-700 relative overflow-hidden transition duration-200 transform hover:-translate-y-2 hover:shadow-4xl hover:cursor-pointer '>
           
            <Link to={`/courses/${id}`} className='text-white font-bold'>
                <h1 className='mb-2 rounded shadow-2xl '>{courseName}</h1> </Link>
            
        </div>
    );
};

export default SideElement;