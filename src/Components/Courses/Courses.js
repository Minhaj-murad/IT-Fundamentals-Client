import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import './Courses.css'
import Rightside from './Rightside/Rightside';

const Courses = () => {
    const courses=useLoaderData();
    console.log(courses);
    return (
        <div className='courses'>
          <div className='grid grid-cols-2 gap-6'>

           {
            courses.map(course => <Course 
                course={course}
                key={course.id}></Course>)
           }
          </div>
          <div>
           <Rightside> </Rightside>
          </div>
        </div>
    );
};

export default Courses;