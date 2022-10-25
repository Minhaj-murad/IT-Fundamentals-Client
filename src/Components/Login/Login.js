import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form className=' w-96 mx-auto h-auto font-serif shadow-2xl text-center mt-4'>
               
                <div className='mt-4'>
                <h1 className='text-2xl  '>Email</h1>
                <input className='bg-gray-300 border border-gray-900 shadow-2xl' type="email" name="email" id="" placeholder='Your Email' required/>
                </div>
                <div className='mt-4'>
                <h1 className='text-2xl '>Password</h1>
                <input className='border border-gray-900 shadow-2xl' type="password" name="password" id="" placeholder='Your password' required/>
                </div>
                <button className='bg bg-amber-700 rounded-xl my-4 py-1 px-2 font-semibold ' type="submit">Log in </button>
                <br />
                <p>Don't have an account? Please <Link to='/signup' className='text-blue-800 font-semibold'>Sign Up  </Link> First</p>
            </form>
        </div>
    );
};

export default Login;