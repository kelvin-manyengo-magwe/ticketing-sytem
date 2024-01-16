import Axios from 'axios';
import { createContext, useContext } from 'react';
import Signout from '../Signout/Signout';

/* creating the Axios instance with the create method*/

  export const Context = createContext({
    name: null,
    getCookie: ()=> {},
  });


const axios = () => {
  const getCookie = (name) => {
   const value = `; ${document.cookie}`;
   const parts = value.split(`; ${name}=`);
   if (parts.length === 2) return parts.pop().split(';').shift();
 }

  Axios.create({
      baseURL: 'http://localhost/api', /*the api endpoint to create*/
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'), //getting token from cookie
      },
      withCredentials: true, /*enable for sending cookies in the ajax requests*/

  });
  return (
    <Context.Provider value={{ name: 'XSRF-TOKEN', getCookie }}>
        <Signout />
    </Context.Provider>
  )

}
export default axios;

export const useCookie = () => {
  return useContext(Context);
}
