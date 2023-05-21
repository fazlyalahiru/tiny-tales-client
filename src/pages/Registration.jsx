import React, { useContext, useState } from 'react';
import login from '../../public/images/login.jpg'
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { Helmet } from 'react-helmet';
import { FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';


const Registration = () => {
    const { createUser, googleLogIn, setLoading } = useContext(AuthContext)
    const auth = getAuth(app);
    const [error, setError] = useState("")

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                setError("")
                form.reset()
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then((result) => {
                    setLoading(true)
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                      )
                }).catch((error) => {
                    // setError(error.message)
                });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleSignInWithGoogle = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleError = () => {
        setError(null)
    }
    return (
        <>
            <Helmet>
                <title>Tiny Tales - My toys</title>
            </Helmet>

            <div className='flex justify-center border  my-4 py-12 '>

                <div className=' w-1/3 grid items-center bg-white shadow md:rounded-l py-14 '>
                <h4 className='text-center text-3xl font-semibold pb-6'>Please Register</h4>
                    <form onSubmit={handleRegister} className='grid gap-4  rounded px-4'>
                    {
                            error && <div className='flex w-full bg-[#570df8] items-center justify-between md:px-6 px-2 text-sm md:text-base rounded'>
                                <p className=' text-white  py-2 rounded'>{error}</p>
                                <FaTimes className='text-white cursor-pointer' onClick={handleError}></FaTimes>
                            </div>
                        }
                        <input type="text" name='name' placeholder="Your name" className="input border border-gray-300 w-full block" />
                        <input type="email" name='email' placeholder="Email" className="input border border-gray-300 w-full block" />
                        <input type="url" name='photo' placeholder="Photo URL" className="input border border-gray-300 w-full block" />
                        <input type="password" name='password' placeholder="Password" className="input border border-gray-300 w-full block" />

                        <input className="btn bg-black hover:bg-gray-800" type="submit" value="Signup" />
                        <p className='pr-2'>Already have an account?<Link to="/login" className='ms-2 text-[#4285F4] hover:text-black' >Login</Link></p>
                        <h4 className=' font-semibold text-center'>- or -</h4>
                        <div className="px-6 sm:px-0 max-w-sm" onClick={handleSignInWithGoogle}>
                            <button type="button" className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                        </div>
                    </form>
                </div>
                <div className='w-1/3  bg-white shadow md:rounded-r justify-center items-center grid'>
                    <img src={login} alt="" />
                </div>
            </div>
        </>
    );
};

export default Registration;