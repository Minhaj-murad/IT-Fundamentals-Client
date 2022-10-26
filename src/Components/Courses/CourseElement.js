import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseElement = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <h1>hellow</h1>
        </div>
    );
};

export default CourseElement;