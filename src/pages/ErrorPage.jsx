import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../../public/images/error.png'


const ErrorPage = () => {
    const { error } = useRouteError()
    return (
        <>
            <div className='min-h-screen container flex flex-col items-center justify-center px-5 mx-auto'>

                <div className='max-w-md text-center'>

                    <img className='w-72' src={errorImg} alt="" />
                    <p className='text-2xl font-semibold md:text-xl text-red-[#60e4a9]'>
                        {error?.message}
                    </p>
                    <Link to='/'>
                        <button className='hover:bg-[#00d1b2] text-white px-2 md:px-6 py-1 md:py-2 rounded uppercase bg-black my-4'>Back to homepage</button>
                    </Link>

                </div>
            </div>

        </>

    )
}

export default ErrorPage;