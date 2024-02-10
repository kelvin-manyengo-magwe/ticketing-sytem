import React from 'react';
import './SideBar.css';
import LinkMap from './LinkMap';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import helpdesk from '../../images/helpdesk2.png';


export default function SideBar() {
      const [isCollapsed, setIsCollapsed] = useState(false);
      

   return (
     <div className="navigation">
            <div className="side-bar-container">
                <div className="side-bar-upper">
                    <div className="side-bar-heading">
                        <div className="side-bar-brand">
                            <img src={helpdesk} width="55px" height="55px"/>
                            <h4>Ticketing System</h4>
                        </div>

                        <button type="button"
                                className={`nav-button ${isCollapsed ? `collapse` : ''}`}
                                onMouseEnter={()=> setIsCollapsed(true)}
                                onMouseLeave={()=> setIsCollapsed(false)}>
                              <span></span>
                              <span></span>
                              <span></span>
                        </button>
                    </div>
                </div>
                <nav className="side-bar-links">
                    <LinkMap />
                </nav>
            </div>
            <div className="content-container">
                <Outlet />
            </div>
      </div>
   )
}
