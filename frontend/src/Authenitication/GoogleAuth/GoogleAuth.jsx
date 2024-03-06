import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/google.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Signin/Signin.css';


function GoogleAuth() {
    const history = useNavigate();
    const [googleUrl, setGoogleUrl] = useState(null);

    const handleGoogleAuth= async() => {

    const response= await fetch(`http://localhost:8000/api/auth/google`,{
        method: 'GET',

        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
          .then((response) => {
              if(response.ok) {
                const data= response.json();

              }

                throw new Error(`Error initiating Google Authenitication: ${response.status} -  ${response.statusText}`);
          })
          .then(
            (data) => {
                setGoogleUrl(data.url);

                if(googleUrl) {
                    window.location.href= googleUrl;
                } else {
                    console.log('Google Authenitication Url is not Available');
                }
            }
          )

            .catch((error) => {
                if(error.response) {
                  console.error(`Error from Google Backend Server:
                    Data: ${JSON.stringify(error.response.data)},
                    Headers: ${JSON.stringify(error.response.headers)},
                    Status: ${error.response.status}`);
                }
                else if(error.request) {
                  console.error(`Error Google Authenitication request was made but not received: ${error.request}`);
                }
                else {
                  console.error( `Error due setting up Google Authenitication request: ${error.message}`);
               }
            });


    }



  /*  const googleCallback = async() => {
      try {
          const response = await fetch(`http://localhost:8000/api/auth/google/call-back`);

            if(response.ok) {
                if(googleUrl) {
                    window.location.href= googleUrl;
                }
                else {
                  console.log('Google Authenitication Url is no Available');
                  console.log(`${googleUrl.scope}`);
                }

            }

            throw new Error(`Error initiating google callback: ${response.status} -  ${response.statusText}`);
      }
      catch(error) {
          console.error(`Error making google callback: ${error}`);
      }
    }*/


    return (
      <>

        <div className="google-login btn d-flex justify-content-between align-items-center mb-3 mt-2 px-5" style={{border: '1px solid black'}}>
          <p style={{marginRight: '10px', transform: 'translate(-90%,30%)' }}><img src={google} width="25px" height="25px" /></p>
          <p style={{ margin: 0, fontWeight: 'bold' }}><Link to={googleUrl} onClick={handleGoogleAuth}>Login with Google</Link></p>
        </div>

    </>
    )


}

export default GoogleAuth;
