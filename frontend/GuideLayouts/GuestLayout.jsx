import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../AuthContext.jsx';

export default function GuestLayout() {
    /*importing the user variable if exists
        through the use of object destructuring without destructuring =
            const Auth= useAuth();
                const user = Auth.user; this will extract the user variable*/
      const { user } = useAuth();

        if(user) {
          <Navigate to="/profile" />
        }
    return (
        <>
        /*render all the child elements if match with the routes*/
              <Outlet />
        </>
    )
}
