import { createBrowserRouter } from 'react-router-dom';
import Profile from '../../Layouts/Profile.jsx';
import GuestLayout from './GuestLayout';
import ProtectedLayout from '';
import Signin from '../Signin/Signin';
import Signout from '../Signout/Signout';

const router = createBrowserRouter([
    {
      path: '/',
      element: <GuestLayout />,
      children: [
        {
          path: '/',
          element: <Signin />
        },
        {
          path: '/signout',
          element: <Signout />
        }
      ],
    },
    {
      path: '/',
      element: <ProtectedLayout />,
      children: [
        {
          path: '/',
          element: <Profile />
        },
      ]
    }
]);
