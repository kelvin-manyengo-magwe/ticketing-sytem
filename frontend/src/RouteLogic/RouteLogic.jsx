import React from 'react';
import Signin from '../Authenitication/Signin/Signin';
import Signout from '../Authenitication/Signout/Signout';
import SideBar from '../Layouts/SideBar/SideBar';
import Dashboard from '../Layouts/Pages/Dashboard/Dashboard';
import Departments from '../Layouts/Pages/Departments/Departments';
import Notifications from '../Layouts/Pages/Notifications/Notifications.jsx';
import ManageTickets from '../Layouts/Pages/Tickets/ManageTickets';
import MyTickets from '../Layouts/Pages/Tickets/MyTickets';
import ManageUsers from '../Layouts/Pages/Users/ManageUsers';
import NoPage from '../Layouts/Pages/NoPage/NoPage';
import Settings from '../Layouts/Pages/Settings/Settings';
import Reports from '../Layouts/Pages/Reports/Reports';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const RouteLogic = () => {


  return (
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<SideBar />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="departments" element={<Departments />} />
                  <Route path="notifications" element={<Notifications />} />
                  <Route path="tickets" element={<MyTickets />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="reports" element={<Reports />} />
                  <Route path="*" element={<NoPage />} />
              </Route>

                  <Route path="/signin" element={<Signin />} />
                  <Route path="/signout" element={<Signout />} />
        </Routes>
    </BrowserRouter>
  )
}


export default RouteLogic;
