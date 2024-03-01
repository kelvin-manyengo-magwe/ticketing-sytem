import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function LogoutLogic() {
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
          await axios.post('http://127.0.0.1:8000/api/logout');

          localStorage.removeItem('accessToken');
          console.log(localStorage);
          navigate('/signin');

      } catch(error) {
          console.log(`Logout Error: ${error}`);
      }
    }
}
