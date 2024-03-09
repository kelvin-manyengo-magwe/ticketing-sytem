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
            <div className={`side-bar-container ${isCollapsed ? 'navigation-in' : 'navigation-out'}`}>
                <div className="side-bar-upper">
                    <div className="side-bar-heading">

                      <div className="bar">
                          <div className="bar-content-left">
                              <div className="email-icon">
                                  <i className="bi bi-envelope-fill"></i>
                              </div>
                              <div className="arrow-icon">
                                  <i className="bi bi-arrow-repeat"></i>
                              </div>

                          </div>
                          <div className="bar-content-right">
                              <div className="search-icon">
                                    <i class="bi bi-search"></i>
                              </div>
                              <div className="message-icon">
                                    <i class="bi bi-chat-fill"></i>
                              </div>
                        </div>  

                      </div>

                        <div className="side-bar-brand">
                            <img src={helpdesk} />
                            <h4>Ticketing System</h4>
                        </div>

                        <button type="button" className="nav-button"
                                onClick={() => setIsCollapsed(!isCollapsed)}>
                              <span></span>
                              <span></span>
                              <span></span>
                        </button>
                    </div>
                </div>
                <nav className="side-bar-links">
                    <LinkMap collapsed={isCollapsed} />
                </nav>
            </div>
            <div className="content-container">
                <Outlet />
            </div>
      </div>
   )
}
