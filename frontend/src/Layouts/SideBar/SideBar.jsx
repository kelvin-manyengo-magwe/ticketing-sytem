import React from 'react';
import './SideBar.css';
import LinkMap from './LinkMap';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import helpdesk from '../../images/helpdesk2.png';


export default function SideBar() {



   return (
      <div className="side-bar-container">
          <div className="side-bar-upper">
              <div className="side-bar-heading">
                  <div className="side-bar-brand">
                      <img src={helpdesk} />
                      <h3>Ticketing System</h3>
                  </div>

                  <button type="button">

                  </button>
              </div>
          </div>
          <nav>
              <LinkMap />
          </nav>
      </div>
   )
}
