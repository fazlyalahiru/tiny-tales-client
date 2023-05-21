import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Tiny Tales | Blog</title>
            </Helmet>
            <h4 className="text-white text-center py-12 font-semibold md:text-4xl bg-gray-800 mt-6 text-2xl">Blog</h4>


            <div className='pt-8 pb-4 px-4'>
                <h1 className='text-xl md:text-3xl font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className='py-2'><b> Access Token: </b>An access token is a short-lived token that is typically used for user authentication. Access tokens are used to authorize access to protected resources and APIs
                    It is usually used in API requests to authenticate and authorize access to protected resources on the server-side.
                </p>
                <p><b>Refresh Token:</b> A refresh token is also used for user authentication. It is a long-lived token with a longer expiration time compared to access tokens. They are used to request a new access token without requiring the user to re-enter their credentials.</p>
            </div>
            <div className='py-4 px-4'>
                <h1 className='text-xl md:text-3xl font-semibold'>Compare SQL and NoSQL databases?</h1>
                <p className='py-2'>The basic difference between SQL and NON SQL database are:
                </p>
                <li>SQL dadtabase store data in table form with predefined schemas where each row represents a record and each column represent attributes. <br />
                    On the otherhand NoSQL databases employ various data models, such as key-value, document, columnar, or graph.
                </li>
                <li>
                    SQL databases are well-suited for applications requiring complex relationships projects. <br />
                    NoSQL databases are a best for large amounts of unstructured data.
                </li>
            </div>
            <div className='p4 px-4'>
                <h1 className='text-xl md:text-3xl font-semibold'>What is MongoDB aggregate and how does it work?</h1>
                <p className='py-2'>MongoDB aggregate is a framwork. It allows user to perform complex data manipulations, transformations, and computations on data stored in a MongoDB database.   
                </p>
            
            </div>
            <div className='pt-4 px-4 pb-8'>
                <h1 className='text-xl md:text-3xl font-semibold'>What is express js? What is Nest JS?</h1>
                <p className='py-2'>Express.js and Nest.js are both web application framwork used in the Node.js ecosystem. 
                </p>
                <p>
                    Compare to Nest.js, Express.js is easy to use and lightweight. Express.js is mostly famous for poweful routing mechanism to handle HTTP requests. 
                </p>
            </div>
        </div>
    );
};

export default Blog;