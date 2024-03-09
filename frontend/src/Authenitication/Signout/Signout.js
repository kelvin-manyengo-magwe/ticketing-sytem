import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from 'react-router-dom';
import './Signout.css';
import login from '../../images/login.avif';
import google from '../../images/google.png';
import facebook from '../../images/facebook.webp';
import SideBar from '../../Layouts/SideBar/SideBar';
import FacebookAuth from '../FacebookAuth/FacebookAuth';
import swal from 'sweetalert';



function Signout() {
  /*perform the object destructuring*/

  const navigate= useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [loading, setLoading] = useState(false);

  function validateEmail(emailValue) {
    return /\S+@\S+\.\S+/.test(emailValue);
  }

  const handleEmailValue = (event) => {
    const emailValue = event.target.value;
    setEmailValue(emailValue);

    if (!validateEmail(emailValue)) {
      setEmailError("Please your email is invalid");
    } else {
      setEmailError(null);
    }

    console.log(event.target.value);
  }

  function validatePassword(passwordValue) {
    return passwordValue && passwordValue.length > 5;
  }

  const handlePasswordValue = (event) => {
    const passwordValue = event.target.value;
    setPasswordValue(passwordValue);
    console.log(event.target.value);

    if (!validatePassword(passwordValue)) {
      setPasswordError("Password must be greater than or equal to 6 characters.");
    } else {
      setPasswordError(null);
    }
  }

  const handleCheckboxClick = () => setIsChecked(!isChecked);
  /*const handleSigninButton = () => setIsClicked(!isClicked);*/

  const handleSigninButton= async (e) => {
    e.preventDefault();

      const formValue= new FormData(e.target);
        const jsonData= {};

        formValue.forEach((value, key) => {
            jsonData[key] = value;
        });
            setLoading(true);

            const response= await fetch(`http://localhost:8000/api/register`, {
                method: 'POST',
                body: JSON.stringify(jsonData),
                headers: {
                  accept: 'application/json',
                  'Content-Type': 'application/json'
                },
            }).then((response) => {
              if(!response.ok) {
                throw Error(`Error: ${response.status} - ${response.statusText}`);
              }
              const signOutData= response.json();
                console.log(signOutData);

                  swal("Success", "Your Credentials have been submitted successfully.","success");
                navigate('/congratulations');
            }).then((data) => {
                setLoading(false);

            }).catch((error) => {
                  if(error.response) {
                      setLoading(false);
                      console.log(`Error from the server:
                          Data: ${JSON.stringify(error.response.data)},
                          Status: ${error.response.status},
                          Headers: ${JSON.stringify(error.response.headers)}`)
                  } else if(error.request) {
                    setLoading(false);
                      console.log(`Error request made but not received ${error.request}`);
                  } else {
                      setLoading(false);
                      console.log(`Error made due setting up request ${error.message}`);
                  }
            });



  }


  return (
    <div className="signin container">
      <div className="picture d-flex flex-column justify-content-center align-items-center">
        <div className="custom-shape-divider-top-1703584043">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="lead text-center fs-1" style={{ color: '#ff0000', fontFamily: 'Verdana, sans-serif', textShadow: '2px 2px 4px rgb(0,0,0,0.2)', transform: 'translateY(-15%)' }}><b>Effortless<br/> Ticket Management</b></div>
        <div><img src={login} /></div>
        <div className="fs-6 text-center mt-3 container p-3" style={{ color: '#33', fontFamily: 'Arial, serif', fontStyle: 'italic' }}><b>Elevate Your Experience With Our Comprehensive Ticketing System - A Solution Crafted for Effortless Complaint Management</b></div>
      </div>

      <div className="container signin-form mt-3 card">
        <div className="head">
          <h1 className="font-weight-bold"><strong>Sign Out</strong></h1>
          <p>please fill up the form to create a new Account.</p>
        </div>

        <form method="post" encType="multipart/form-data" onSubmit={handleSigninButton} className="mt-4">


          <div className="group">
    <div className="form-group mb-4">
      <label htmlFor="username" className="font-weight-bold"><b>Username</b></label>
      <div className="input-group">
        <input type="text" id="username" name="username" size="27" placeholder="Enter Your Username" />
              <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
      </div>
    </div>


        <div className="form-group mb-4">
          <label htmlFor="phoneNo" className="font-weight-bold"><b>Phone No</b></label>
          <div className="input-group">
            <input type="tel" id="phoneNo" name="phoneNo" size="27" placeholder="Enter Your Phone Number" />
            <span className="input-group-text"><i className=" bi bi-telephone"></i></span>
          </div>
        </div>

  </div>

  <div className="group">
    <div className="form-group mb-4">
      <label htmlFor="email" className="font-weight-bold"><b>Email</b></label>
        <div className="input-group">
            <input type="email" id="email" name="email" size="27" placeholder="name@gmail.com" />
                <span className="input-group-text"><i className=" bi bi-envelope-fill"></i></span>
        </div>
    </div>

    <div className="form-group mb-4">
      <label htmlFor="password" className="font-weight-bold"><b>Password</b></label>
      <div className="input-group">
        <input type="password"id=" password" name="password" size="27" placeholder="Must be at least 6 characters..." />
            <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
      </div>
    </div>
  </div>

  <div className="group">
      <div className="form-group mb-4">
        <label className="font-weight-bold"><b>Verify Password</b></label>
            <div className="input-email input-group">

              <input type="password" value={passwordValue} onChange={handlePasswordValue}
                    className={`text-center p-1 ${validatePassword(passwordValue) ?
                          "changeGreen" :
                              "changeRed"}`} size="27" name="verifyPassword" id="verifyPassword" placeholder="Re-enter Password" />
                    <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                    {validatePassword(passwordValue) ? (
                      <span className="input-group-text bi bi-check-circle-fill fs-6"></span>) :
                      (<span className="input-group-text bi bi-x-circle-fill fs-6"></span>)}
            </div>
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      </div>
  </div>


          <div className="checkbox mt-4 mb-4">
            <div className={`signin-checkbox ${isChecked ? "checked" : ""}`}><input type="checkbox" checked={isChecked} onChange={handleCheckboxClick} /></div>
            <div className="signin-checkbox-name">Remember me</div>
          </div>

          <button className={`btn btn-success px-4 ${isClicked ? "click-effect" : ""}`} disabled={loading}>

              {loading ?
                (<>Loading</>)
                    :
                (<strong>Signout</strong>)
              }
          </button>

        </form>

        <p className="mt-3"> Already have an account ?
          <Link className="signin-register" to="/signin">Login here</Link>
        </p>

        <div className="end">
          <div className="or-section mt-3">

            <p className="or-text">OR</p>

          </div>
        </div>

        <div className="alternative-login mt-2">
            <div className="btn d-flex justify-content-between align-items-center mb-3 mt-2 px-5" style={{ border: '1px solid black' }}>
                  <p style={{ transform: 'translate(-90%,30%)' }}><img src={google} width="25px" height="25px" /></p>
                  <p style={{ margin: 0, fontWeight: 'bold' }}>Register with Google</p>
            </div>
            <div className="btn d-flex justify-content-between align-items-center px-5" style={{ border: '1px solid black', height: '60px', transform: 'translateY(-8%)' }}>
                  <p style={{ transform: 'translate(-60%,30%)' }}><i className="bi bi-facebook bg-primary text-light fs-5"></i></p>
                  <p style={{ margin: 0 , fontWeight: 'bold'}}>Register with Facebook</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Signout;
