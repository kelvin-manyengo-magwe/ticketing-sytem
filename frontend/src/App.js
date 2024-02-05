import './App.css';
import Signin from './Authenitication/Signin/Signin';
import Signout from './Authenitication/Signout/Signout';

import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './Layouts/SideBar/SideBar';
import Dashboard from './Layouts/Pages/Dashboard/Dashboard';

import ManageDepartments from './Layouts/Pages/Departments/ManageDepartments';
import Notifications from './Layouts/Pages/Notifications/Notifications.jsx';
import ManageTickets from './Layouts/Pages/Tickets/ManageTickets';

import MyTickets from './Layouts/Pages/Tickets/MyTickets';
import ManageUsers from './Layouts/Pages/Users/ManageUsers';
import NoPage from './NoPage';


function App() {
  return (
  <BrowserRouter>
      <div className="App">
            <Routes>

                  <Route path="/" element={<SideBar />}>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="manageDepartments" element={<ManageDepartments />} />
                      <Route path="notifications" element={<Notifications />} />
                      <Route path="manageTickets" element={<ManageTickets />} />
                      <Route path="myTickets" element={<MyTickets />} />
                      <Route path="manageUsers" element={<ManageUsers />} />
                  </Route>


                  <Route path="signout" element={<Signout />} />
                  <Route path="signin" element={<Signin />} />

                  <Route path="*" element={<NoPage />} />
            </Routes>
      </div>
  </BrowserRouter>

);
}

export default App;
