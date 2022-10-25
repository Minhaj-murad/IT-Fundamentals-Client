import React from 'react';

const SideElement = ({course}) => {
    const {courseName} =course;
    return (
        <div>
            <h1>{courseName}</h1>
        </div>
    );
};

export default SideElement;