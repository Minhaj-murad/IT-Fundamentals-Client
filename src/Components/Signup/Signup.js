import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UseContext/Usecontext';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const Signup = () => {
    
    const { createUser, googlesignin, githubsignin, updateUserProfile } = useContext(AuthContext);
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();


    const handleregister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(email, password, name, photoURL);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL);

            })
            .catch(error => console.error(error));

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    const handlegooglesign = () => {
        googlesignin(googleprovider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.error(error));
    }

    const handlegithubsign = () => {
        githubsignin(githubprovider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.error(error));
    }


    return (
        <div className='w-96 mx-auto h-auto  shadow-2xl text-center mt-4'>
            <form onSubmit={handleregister} >
                <div className='mt-4'>
                    <h1 className='text-2xl '>Your Name</h1>
                    <input className=' text-gray-900 border border-gray-900 shadow-2xl' type="name" name="name" id="" placeholder='Your name' required />
                </div>
                <div className='mt-4'>
                    <h1 className='text-2xl '>Your PhotoURL</h1>
                    <input className=' text-gray-900 border border-gray-900 shadow-2xl' type="text" name="photoURL" id="" placeholder='Your PhotoURL' required />
                </div>
                <div className='mt-4'>
                    <h1 className='text-2xl '>Email</h1>
                    <input className=' text-gray-900 border border-gray-900 shadow-2xl' type="email" name="email" id="" placeholder='Your Email' required />
                </div>
                <div className='mt-4'>
                    <h1 className='text-2xl '>Password</h1>
                    <input className=' text-gray-900 border border-gray-900 shadow-2xl' type="password" name="password" id="" placeholder='Your password' required />
                </div>
                <button className='bg bg-amber-700 rounded-xl my-4 py-1 px-2 font-semibold ' type="submit">Register </button>
                <br />
                <p>Already have an account? Please <Link to='/login' className='text-green-400 font-semibold'>Log In </Link></p>

                <br />



            </form>
            <p className='mb-4'>Or,Sign up with one of the followings:</p>

            <div className='w-56 flex gap-2 mx-auto'>

                <button onClick={handlegooglesign} className='bg-cyan-600 py-1 px-2 rounded-lg text-center w-28 mx-auto flex items-center gap-4 border border-gray-700'><FaGoogle></FaGoogle> Google </button>
                <button onClick={handlegithubsign} className='bg-cyan-600 py-1 px-2 rounded-lg text-center w-28 mx-auto flex items-center gap-4 border border-gray-700'><FaGithub></FaGithub> Github </button>
            </div>
        </div>
    );
};

export default Signup;