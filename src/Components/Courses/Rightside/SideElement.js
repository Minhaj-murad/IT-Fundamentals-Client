import React from 'react';
import { Link } from 'react-router-dom';

const SideElement = ({course}) => {
    const {courseName,id} =course;
    return (
        <div>
            <Link to={`/courses/${id}`} className='text-blue-900 font-bold'><h1>{courseName}</h1> </Link>
            
        </div>
    );
};

export default SideElement;