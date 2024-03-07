import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from 'react-router-dom';
import './Congratulations.css';
import helpdesk from '../../../images/helpdesk2.png';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import swal from 'sweetalert';



function Congratulations() {
    const {width, height} = useWindowSize();


  return (

        <div className="congratulation-container">

        <Confetti width={width} height={height} numberOfPieces={200} gravity={0.03} />
        <Confetti width={width} height={height} numberOfPieces={200} gravity={0.09} style={{ left: 0}} />


            <div className="congratulation-content">
            <div className="side-bar-brand">
                <img src={helpdesk} />
                <h4>Ticketing System</h4>
            </div>
                <div className="congratulation-title">Congratulations!</div>
                <div className="congratulation-title2">Your Account is ready.</div>

                <div className="message-container">
                      <p className="congratulations-message">
                          Welcome to our ticketing system!
                          <br/>You are now successfully registered and<br/>
                          ready to experience a seamless ticketing platform.
                      </p>
                    <div className="button">
                        <button className="start btn btn-primary">
                            <Link to="/sidebar">Start Seamless Ticketing
                              <i className="bi bi-arrow-right px-2" style={{fontSize: '1.2em'}}></i>

                            </Link>
                        </button>
                    </div>
                </div>

            </div>
        </div>

  )
}

export default Congratulations;
