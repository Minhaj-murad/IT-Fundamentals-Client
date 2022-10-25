import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div >
        <form className='w-96 mx-auto h-auto  shadow-2xl text-center mt-4'>
            <div className='mt-4'>
            <h1 className='text-2xl '>Your Name</h1>
            <input className='border border-gray-900 shadow-2xl' type="name" name="name" id="" placeholder='Your name' required/>
            </div>
            <div className='mt-4'>
            <h1 className='text-2xl '>Your PhotoURL</h1>
            <input className='border border-gray-900 shadow-2xl' type="text" name="photoURL" id="" placeholder='Your PhotoURL' required/>
            </div>
            <div className='mt-4'>
            <h1 className='text-2xl '>Email</h1>
            <input className='border border-gray-900 shadow-2xl' type="email" name="email" id="" placeholder='Your Email' required/>
            </div>
            <div className='mt-4'>
            <h1 className='text-2xl '>Password</h1>
            <input className='border border-gray-900 shadow-2xl' type="password" name="password" id="" placeholder='Your password' required/>
            </div>
            <button className='bg bg-amber-700 rounded-xl my-4 py-1 px-2 font-semibold ' type="submit">Register </button>
            <br />
            <p>Already have an account? Please <Link to='/login' className='text-green-400 font-semibold'>Log In </Link></p>
        </form>
    </div>
);
};

export default Signup;