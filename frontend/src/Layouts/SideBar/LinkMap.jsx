import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './SideBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const LinkMap = () => {
    const menuItems = [
        {path: '/dashboard',  icon: 'bi bi-grid',  text: 'Dashboard'},
        {path: '/tickets',  icon: 'bi bi-ticket-detailed',  text: 'Tickets'},
        {path: '/departments',  icon: 'bi bi-bookshelf',  text: 'Departments'},
        {path: '/notifications',  icon: 'bi bi-bell',  text: 'Notifications'},
        {path: '/users',  icon: 'bi bi-people',  text: 'Users'},
        {path: '/settings',  icon: 'bi bi-gear',  text: 'Settings'},
        {path: '/reports', icon: 'bi bi-book', text: 'Reports'},
        {path: '/logout',  icon: 'bi bi-box-arrow-left',  text: 'Logout'},
    ];

    const [activeLink, setActiveLink] = useState(window.location.pathname);

    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, [window.location.pathname])

  return (
      <ul className="listContent">
          {menuItems.map( (item, index) => (
              <li key={index}>
                  <Link to={item.path}
                   style={{textDecoration: 'none', color: 'white'}}
                   className={`link-icon ${activeLink == item.path ? `activeLink` : ``}`}
                   onClick={() => setActiveLink(item.path)}>

                      <i className={item.icon} style={{fontWeight: 'bold'}}></i>
                      <span>{item.text}</span>
                    
                  </Link>
              </li>
          )
          )}
      </ul>
  );
}

export default LinkMap;
