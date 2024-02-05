import React from 'react';
import './SideBar.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from '../Pages/Dashboard/Dashboard';

import ManageDepartments from '../Pages/Departments/ManageDepartments';
import Notifications from '../Pages/Notifications/Notifications.jsx';
import ManageTickets from '../Pages/Tickets/ManageTickets';
import MyTickets from '../Pages/Tickets/MyTickets';

import ManageUsers from '../Pages/Users/ManageUsers';
import { Link, Outlet, useNavigate } from 'react-router-dom';



export default function SideBar() {

    const navigate = useNavigate();

    const handlePath = (path) => {
      navigate(path);
    }

   return (

     <div className="firstViewPage">
        <div className="sideBarContent">

        <div className="navbar">
              <button className="navbar-toggler" type="button"
                      data-toggle="collapse"     aria-controls="navbarNav"
                      aria-expanded="false"      aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
              </button>

        </div>

        <div class="profile">
            <span className="bi bi-person"></span>
            <div>Admin</div>
        </div>

        <nav>
            <ul className="listContent">
                <li>
                      <Link to="/dashboard">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                        </Link>
                </li>
                <li>
                      <Link to="/myTickets">
                        <i className="bi bi-person-check"></i>
                        <span>My Tickets</span>
                      </Link>
                </li>
                <li>
                      <Link to="/manageTickets">
                        <i className="bi bi-ticket-detailed"></i>
                        <span>Manage Tickets</span>
                      </Link>
                </li>
                <li>
                      <Link to="/manageDepartments">
                        <i className="bi bi-bookshelf"></i>
                        <span>Manage Departments</span>
                      </Link>
                </li>
                <li>
                      <Link to="/notifications">
                        <i className="bi bi-bell"></i>
                        <span>Notifications</span>
                      </Link>
                </li>
                <li>
                      <Link to="/manageUsers">
                        <i className="bi bi-people"></i>
                        <span>Manage Users</span>
                      </Link>
                </li>

                <li>
                        <i className="bi bi-gear"></i>
                        <span>Settings</span>
                </li>

                <li>
                      <i className="bi bi-box-arrow-left"></i>
                      <span>Logout</span>
                </li>
            </ul>
          </nav>
        </div>
        <div className="sideBarBody">

              <div className="container">
                  <div className="row">
                      <Outlet />
                  </div>
              </div>
        </div>
     </div>

   )
}
