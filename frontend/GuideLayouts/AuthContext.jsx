import { createContext, useContext, useState } from 'react';
import axios from './axios';


const AuthContent = createContext({
    user: null,
    setUser: () => {}, /*setting the user to the empty function*/
    csrfToken: () => {},
});

export const AuthProvider = ({ children }) => {

  /*setting the initial state to the value associated with key browser in browser localStorage*/
  const [user, _setUser] = useState(
      JSON.parse(localStorage.getItem('user')) || null
  );

      const setUser = (user) => {
        if(user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
        else {
            localStorage.removeItem('user');
        }

        /*making the setUser to be the private function*/
        _setUser(user);
      }

      /*fetching the csrfToken from the laravel-sanctum*/
      const csrfToken = async() => {
        await axios.get(`http://localhost:8000/sanctum/csrf-cookie`);

          return true;
      }

      return (
          <AuthProvider.Provider value={{ user, setUser, csrfToken }}>
              {children}
          </AuthProvider.Provider>
      );
}


  export const useAuth = () => {
    return useContext(AuthContent);
  }
