import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UseContext/Usecontext';

const Login = () => {
    const {signIn}=useContext(AuthContext);
       console.log(signIn);
    const handlesubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
       
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            
        })
        .catch(error => console.error(error));

    }
    return (
        <div>
            <form onSubmit={handlesubmit} className=' w-96 mx-auto h-auto  shadow-2xl text-center mt-4'>
               
                <div className='mt-4'>
                 <label className='text-2xl' htmlFor="email">Email</label> <br />
                <input className='bg-gray-300 border border-gray-900 shadow-2xl' type="email" name="email" id="" placeholder='Your Email' required/>
                </div>
                <div className='mt-4'>
                <label className='text-2xl' htmlFor="password">Password</label> <br />
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