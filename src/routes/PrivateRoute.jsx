import React, { Children, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if (loading) {
        return <div className='text-center py-12'> <p>Please wait</p><progress className="progress w-56"></progress></div>
    }
    if (user) {
        return children
    }
    return (<Navigate to="/login" state= {{from: location}} replace></Navigate>);
};

export default PrivateRoute;