import facebook from '../../images/facebook.webp';
import React, { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Signin/Signin.css';



function FacebookAuth() {

    return (
      <div className="btn d-flex justify-content-between align-items-center px-5" style={{border: '1px solid black', background: 'rgb(13,110,253)', color: 'white'}}>
          <p style={{ marginRight: '10px', transform: 'translate(-60%,20%)', height: '30px' }}><i className="bi bi-facebook bg-primary text-light fs-4"></i></p>
          <p style={{ margin: 0 , fontWeight: 'bold'}}>Login with Facebook</p>
      </div>
    )
}

export default FacebookAuth;
