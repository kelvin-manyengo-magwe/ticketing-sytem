import React, { useEffect } from 'react';
import useAuth from './AuthContext.jsx';
import axios from './axios';

export default function DefaultLayout() {
    /*perform the object destructuring from fetching the user and setUser function*/
      const { user, setUser } = useAuth();
    /*without the object destructuring it could be
        const useUser= useAuth();
        const user= useUser.user;
        const setUser = useUser.setuser; */

      useEffect( ()=> {
          async() => {
              try {
                const resp = await axios.get(`/user`);
                    if(resp.status == 200) {
                        setUser(resp.data.data)
                    }
                    else {
                      console.log('Unauthorized Access.');
                    }

              } catch(error) {
                  if(error.response.status == 401) {
                      localStorage.removeItem('user');
                      window.location.href= '/';
                  }
              }
          }
      }, []);

      if(!user) {
        <Navigate to="/" />
      }

      //for the logout
      const handleLogout = async() => {
          try {
            const resp = await axios.post('/logout');

            if(resp.status == 200){ /*if response is resp.ok*/
                localStorage.removeItem('user');
                window.location.href= '/';
            }
            else {
              console.log('Logout Failed');
            }
          }
          catch(error) {
              /*if the request was made but the response was from the server*/
              if(error.response) {
                console.log('Server Response is  ', error.response.server);
                console.log('Server Response is  ', error.response.headers);
                console.log('Server Response is  ', error.response.data);
              }
              /*if the request was made and no response received*/
              else if(error.request) {
                  console.log('No response Received  ', error.request);
              }
              else {
                /*if request was made but the error was from setting request*/
                console.log('Error Setting the request  ', error.message);
              }
          }
      }

  return (
      <>
        ProtectedLayout
      </>
  )
}
