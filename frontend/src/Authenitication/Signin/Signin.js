import React, { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ticket3 from '../../images/ticket3.png';
import login from '../../images/login.avif';
import green from '../../images/green.webp';
import google from '../../images/google.png';
import facebook from '../../images/facebook.webp';
import './Signin.css';
import {  Link, useNavigate } from 'react-router-dom';
import SideBar from '../../Layouts/SideBar/SideBar';
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import FacebookAuth from '../FacebookAuth/FacebookAuth';
import swal from 'sweetalert';


const LoadingContext= createContext();

function Signin() {

          const [isChecked, setIsChecked] = useState(false);
          const [isClicked, setIsClicked] = useState(false);

          const [emailValue, setEmailValue]= useState(null);
          const [passwordValue, setPasswordValue]=  useState("");

          const [emailError, setEmailError]= useState(null);
          const [passwordError, setPasswordError] = useState(null);

          const [loading, setLoading] = useState(false);

          const navigate = useNavigate();

          /*validation of email*/
          function validateEmail(emailValue) {
            return /\S+@\S+\.\S+/.test(emailValue);
          }

          const handleEmailValue = (event) => {

            const emailValue = event.target.value;
            setEmailValue(emailValue);

            if(!validateEmail(emailValue)) {

              setEmailError("Please your email is invalid");
            }
            else {
              setEmailError(null);
            }

            console.log(event.target.value);
          }

          function validatePassword (passwordValue) {
            /*for the making of the password value to be undefined at the time the lenght is being accessed*/
            return passwordValue && passwordValue.length > 5;
          }

          const handlePasswordValue = (event) => {
            const passwordValue = event.target.value;

            setPasswordValue(passwordValue);
            console.log(event.target.value);

            if(!validatePassword(passwordValue)) {
              setPasswordError("password must be greater than or equal 6 characters.");
            }
            else {
              setPasswordError(null);
            }
          }

          /*const loadEffect = ()=> {
            setLoading(true);
              setTimeout(()=> setLoading(false), 2000);
          }*/

          const handleCheckboxClick= () => setIsChecked(!isChecked);



            const submitMethod = async (event) => {
              event.preventDefault();
              setIsClicked(!isClicked);

              /*create the instance of the FormData for the form values*/
              const formData = new FormData(event.target);

              /*create the empty object to store the form values*/
              const jsonData= {};

              /*iterate through the !form fields for form data*/
              formData.forEach((value, key) => {
                jsonData[key] = value;
              });

                setLoading(!loading);
                      const response = await fetch(`http://127.0.0.1:8000/api/login`, {
                        method: 'POST',
                        body: JSON.stringify(jsonData),
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                        },
                      }).then((response) => {
                        if(!response.ok) {
                          throw Error(`Error: ${response.status} - ${response.statusText}`);
                        }

                        const signinData = response.json();
                          console.log(signinData);
                            swal("Success", "Your form submited successfully.", "success");
                          navigate('/sidebar');
                      }).then((data) => {
                          setLoading(false);
                      }).
                      catch((error) => {
                        if(error.response) { /*response was from the server*/
                          setLoading(false);
                            console.log(`Error from the server:
                              Data: ${JSON.stringify(error.response.data)},
                              Status: ${error.response.status},
                              Headers: ${JSON.stringify(error.response.headers)}`);
                        }
                          else if(error.request) { /*request was made but not received*/
                              console.log(`Error request was made but not received: ${error.request}`);
                              setLoading(false);
                          }
                          else {
                            setLoading(false);
                            console.log(`Error due setting up request ${error.message}`);
                          }

                      });

            }



        return (

          /*style={{ background: 'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))'}}*/
          <div className="signin container">

          <div className="picture">
                    {/*<div class="custom-shape-divider-top-1703581754">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="rgb(227,245,249)"></path>
                  </svg>
                </div>*/}
              <div className="custom-shape-divider-top-1703584043">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                  </svg>
              </div>

              <div className="upper-auth">
                  <p className="lead text-center fs-1" style={{ color: '#ff0000', fontFamily: 'Verdana, sans-serif', textShadow: '2px 2px 4px rgb(0,0,0,0.2)' }}><b>Effortless<br/> Ticket Management</b></p>

                  <p><img src={login} /></p>
                  <p className="fs-6 text-center mt-3 container p-3" style={{ color: '#33', fontFamily: 'Arial, serif', fontStyle: 'italic' }}><b>Elevate Your Experience With Our Comprehensive Ticketing System - A Solution Crafted for Effortless Complaint Managment</b></p>
              </div>

          </div>

            <div className="container signin-form mt-3 card">
                <div className="head">
                  <h1 className="font-weight-bold"><strong>Sign In</strong></h1>
                  <p>please fill up the form to login to your account</p>
                </div>


                <form onSubmit={submitMethod} encType="multipart/form-data" method="post" className="mt-4">
                    <div className="form-group mb-4">
                        <label className="font-weight-bold"><b>Email</b></label>

                          <div className="input-email input-group">
                              <input type="email" name="email" value={emailValue} onChange={handleEmailValue} className={`text-center p-1 ${validateEmail(emailValue) ? "changeGreen" : "changeRed"}`} size="30" placeholder="name@gmail.com" />
                                  <span className="input-group-text"><i className="bi bi-envelope"></i></span>

                                  {validateEmail(emailValue) ? (
                                    <span className="input-group-text bi bi-check-circle-fill fs-6"></span>) :
                                        (<span className="input-group-text bi bi-x-circle-fill fs-6"></span>)
                                      }

                          </div>
                          {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold"><b>Password</b></label>

                          <div className="input-password input-group">
                              <input type="password" size="30" name="password" value={passwordValue} onChange={handlePasswordValue} className={`text-center p-1 ${validatePassword(passwordValue) ? "changeGreen" : "changeRed"}`} placeholder="Must be at least 6 characters..." />
                                  <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>

                                  {validatePassword(passwordValue) ? (
                                    <span className="input-group-text bi bi-check-circle-fill fs-6"></span>) :
                                          ((<span className="input-group-text bi bi-x-circle-fill fs-6"></span>))}
                          </div>
                          {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                    </div>

                    <div className="checkbox mt-4 mb-4">
                        <div className={`signin-checkbox ${isChecked? "checked" : ""}`}><input type="checkbox" checked={isChecked} onChange={handleCheckboxClick} /></div>
                        <div className="signin-checkbox-name">Remember me</div>
                    </div>

                    <button className={`btn btn-success px-4 ${isClicked ? "click-effect" : ""}`}
                            disabled={loading}
                            >
                          {!loading ? (<strong>Sign In</strong>) :
                            (
                              <>
                                  Loading....
                              </>
                            )}
                    </button>
                </form>


                <p className="mt-3">Don't have an account ?
                  <Link className="signin-register" to="signout"> Register here</Link>
                </p>


                  <div className="end">
                      <div className="or-section mt-3">

                        <p className="or-text">OR</p>

                      </div>

                  </div>

                  <div className="alternative-login mt-2">

                  <GoogleAuth />

                  <FacebookAuth />
      </div>



            </div>

          </div>

);
}

export default Signin;
