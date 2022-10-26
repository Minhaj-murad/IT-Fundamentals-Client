import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UseContext/Usecontext';

const Login = () => {
    const { signIn, googlesignin, githubsignin } = useContext(AuthContext);
    console.log(signIn);
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/'

    const handlesubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true})

            })
            .catch(error => console.error(error));

    }
  

    const handlegooglesign = () => {
        googlesignin(googleprovider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(error => console.error(error));
    }

    const handlegithubsign = () => {
        githubsignin(githubprovider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <form onSubmit={handlesubmit} className=' w-96 mx-auto h-auto  shadow-2xl text-center mt-4'>

                <div className='mt-4'>
                    <label className='text-2xl' htmlFor="email">Email</label> <br />
                    <input className=' text-gray-900 border border-gray-900 shadow-2xl' type="email" name="email" id="" placeholder='Your Email' required />
                </div>
                <div className='mt-4'>
                    <label className='text-2xl' htmlFor="password">Password</label> <br />
                    <input className=' text-gray-900 border border-gray-900 shadow-2xl' type="password" name="password" id="" placeholder='Your password' required />
                </div>
                <button className='bg bg-amber-700 rounded-xl my-4 py-1 px-2 font-semibold ' type="submit">Log in </button>
                <br />
                <p>Don't have an account? Please <Link to='/signup' className='text-blue-800 font-semibold'>Sign Up  </Link> First</p>
            </form>
            <div className='w-56 flex gap-2 mx-auto'>

                <button onClick={handlegooglesign} className='bg-cyan-600 py-1 px-2 rounded-lg text-center w-28 mx-auto flex items-center gap-4 border border-gray-700'><FaGoogle></FaGoogle> Google </button>
                <button onClick={handlegithubsign} className='bg-cyan-600 py-1 px-2 rounded-lg text-center w-28 mx-auto flex items-center gap-4 border border-gray-700'><FaGithub></FaGithub> Github </button>
            </div>
        </div>
    );
};

export default Login;