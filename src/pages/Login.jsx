import React, { useContext } from 'react';
import login from '../../public/images/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState("")
    const from = location.state?.from?.pathname || '/';
    console.log(location);
    const { signIn, googleLogIn } = useContext(AuthContext)
    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignWithGoogle = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <Helmet>
                <title>Tiny Tales - Login</title>
            </Helmet>
            <div className='flex justify-center border my-4 rounded-sm py-12 '>
                <div className='w-1/3 bg-white justify-center items-center grid shadow md:rounded-l'>
                    <img src={login} alt="" />
                </div>
                <div className=' w-1/3 grid items-center bg-white shadow md:rounded-r'>
                    <form onSubmit={handleSignIn} className='grid gap-4  py-14 rounded px-4'>
                        <input type="email" name='email' placeholder="Email" className="input border border-gray-300 w-full block" />
                        <input type="password" name='password' placeholder="Password" className="input border border-gray-300 w-full block" />


                        <input className="btn bg-black hover:bg-gray-800" type="submit" value="Login" />
                        <p className='pr-2'>Already have an account?<Link to="/register" className='ms-2 text-[#4285F4] hover:text-black' >Register</Link></p>
                        <h4 className=' font-semibold text-center'>- or -</h4>
                        <div className="px-6 sm:px-0 max-w-sm" onClick={handleSignWithGoogle}>
                            <button type="button" className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign in with Google<div></div></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;