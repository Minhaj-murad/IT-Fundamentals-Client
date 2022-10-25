import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideElement from './SideElement';

const Rightside = () => {
    const courses=useLoaderData();

    return (
        <div>
            
                {
                    courses.map(course => <SideElement 
                        course={course}
                        key={course.id}></SideElement>)
                   }
            
        </div>
    );
};

export default Rightside;