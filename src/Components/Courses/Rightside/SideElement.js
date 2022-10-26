import React from 'react';
import { Link } from 'react-router-dom';

const SideElement = ({course}) => {
    const {courseName} =course;
    return (
        <div>
            <Link><h1>{courseName}</h1></Link>
        </div>
    );
};

export default SideElement;